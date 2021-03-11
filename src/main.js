import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


window.scroll(function(){
  document.getElementsByClassName(".info").css("opacity", 1 - window.scrollTop() / 250);
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
