import Vue from 'vue';
import Vuetify from 'vuetify';

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import store from './store';
import apolloProvider from './apollo';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  el: '#app',
  store,
  apolloProvider,
  render: h => h(App)
});
