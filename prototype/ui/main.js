import Vue from 'vue';

import apolloProvider from './apollo';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
});
