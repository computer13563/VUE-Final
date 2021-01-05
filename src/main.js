import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'

Vue.config.productionTip = false;
// loading page 套件
Vue.use(VueLoading);
Vue.component('loading', VueLoading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
