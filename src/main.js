import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
