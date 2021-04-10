import { renderToString } from '@vue/server-renderer';
import { createApp } from './src/main';

function renderPreloadLink(file) {
  if (file.endsWith('.js')) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  }
  if (file.endsWith('.css')) {
    return `<link rel="stylesheet" href="${file}">`;
  }
  return '';
}

function renderPreloadLinks(modules, manifest) {
  let links = '';
  const seen = new Set();
  modules.forEach((id) => {
    const files = manifest[id];

    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}

export async function render(url, manifest) {
  const { app, router } = createApp();

  // Push the requested url on the router instance
  router.push(url);
  await router.isReady();

  // Render the application to an html string
  const ctx = {};
  const html = await renderToString(app, ctx);

  // Gather a list of links to modules that can be preloaded
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);

  // Return the html for the app and the meta for the preload links
  return [html, preloadLinks];
}
