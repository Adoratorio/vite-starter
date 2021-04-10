import { createApp } from '../src/main';

const { app, router } = createApp();

router.isReady().then(() => {
  app.mount('#app');
});
