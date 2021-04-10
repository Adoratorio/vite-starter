import { createSSRApp } from 'vue';
import { createRouter } from './router';
import { createStore } from './store';
import App from './App.vue';

// This file will contain all the Universal app code
// and will run on both server and clinet side

// Export a factory function for the app, the router
// and the store
export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  const store = createStore();

  app.use(router);
  app.use(store);

  return { app, router };
}
