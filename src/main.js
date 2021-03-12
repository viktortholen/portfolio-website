import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
Vue.config.productionTip = false

// AOS.init();

new Vue({
  router,
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
