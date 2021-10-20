import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import VueMeta from 'vue-meta';

Vue.use(VueMeta);


Vue.config.productionTip = false


new Vue({
  router,
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
