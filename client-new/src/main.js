import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);

Vue.use(Buefy, {
  defaultIconPack: 'fas',
});

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
