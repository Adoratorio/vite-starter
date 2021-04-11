/* eslint-disable global-require, no-console, import/no-unresolved, no-await-in-loop */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { render } = require('./dist/server/server.js');
const manifest = require('./dist/static/ssr-manifest.json');

const resolve = (p) => path.resolve(__dirname, p);
async function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
const template = fs.readFileSync(resolve('dist/static/index.html'), 'utf-8');

// Define here prerender routes
const routesToPrerender = [
  '/',
  '/about',
];
const delay = 1000;

async function preRender() {
  for (let i = 0; i < routesToPrerender.length; i += 1) {
    const url = routesToPrerender[i];
    const [appHtml, preloadLinks] = await render(url, manifest);
    const html = template
      .replace('<!--preload-links-->', preloadLinks)
      .replace('<!--ssr-outlet-->', appHtml);

    const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
    fs.writeFileSync(resolve(filePath), html);
    console.log(chalk.green('Pre-Render completed for: ', filePath));
    console.log(chalk.yellow(`Waiting ${delay / 1000}s before next route`));
    await sleep(delay);
  }

  // Remove ssr manifest before quitting
  fs.unlinkSync(resolve('dist/static/ssr-manifest.json'));
}

preRender();
