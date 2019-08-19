import Vue from 'vue';

import apolloProvider from './plugins/apolloProvider';
import vuetify from './plugins/vuetify';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  apolloProvider,
  vuetify,
  render: h => h(App),
});
