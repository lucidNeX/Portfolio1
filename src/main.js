import { createApp } from 'vue'
import App from './App.vue'
import {Quasar} from 'quasar';
import router, { setupRouter } from './router'
import './styles/App.scss';
// import VueSmoothScroll from 'vue3-smooth-scroll'

(async () => {

  const app = createApp(App);

  setupRouter(app);
  await router.isReady();

  app.use(Quasar)
  // app.use(VueSmoothScroll)
  
  app.mount('#app');
})();
// createApp(App).use(router).mount('#app');



// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')
