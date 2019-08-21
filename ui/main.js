import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import apolloProvider from './plugins/apolloProvider';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App),
});
