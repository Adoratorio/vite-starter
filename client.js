import { createApp } from './src/main';

// Import the same appa and router code used for
// the server side html generation
const { app, router } = createApp();

// Wait for the router to be ready and the hydrate
router.isReady().then(() => {
  app.mount('#app');
});
