const fs = require('fs');
const path = require('path');
const express = require('express');
const { createServer: createViteServer } = require('vite');
const chalk = require('chalk');

async function start() {
  console.log(chalk.blue('Starting Adoratorio Vite Starter server'));

  // Initiate the express app and link vite as middleware
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
  });
  app.use(vite.middlewares);

  // Listen for every request with every method
  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    console.log(chalk.yellow(`Request: ${req.method} : ${url}`));
  
    try {
      // Read the index.html file from the app folder then apply
      // vite transform injecting hot module reload script and
      // plugins transforms
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
  
      // Use vite for loading the server side render function and
      // then retrive the rendered strings
      // (one for the app and one for the meta links)
      const { render } = await vite.ssrLoadModule('/app/server.js');
      const [appHtml, preloadLinks] = await render(url, { });
  
      // Replace the template placeholders
      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
        .replace(`<!--ssr-outlet-->`, appHtml);
  
      // Reply the the created page html
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      // Fix the trace and log the error if any
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  })

  console.log(chalk.blue('Server started'));
  console.log(chalk.blue('Listening on: http://localhost:8080'));

  // Start the server listening
  app.listen(8080);
}

start();