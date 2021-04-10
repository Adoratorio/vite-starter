import { createApp } from './src/main';
import { renderToString } from '@vue/server-renderer';

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

function renderPreloadLink(file) {
  if (file.endsWith('.js')) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith('.css')) {
    return `<link rel="stylesheet" href="${file}">`;
  } else {
    return '';
  }
}
