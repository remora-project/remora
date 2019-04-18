import Vue from 'vue';
import VueApollo from 'vue-apollo';
import Vuetify from 'vuetify';

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css';

import apolloClient from './apolloClient';
import App from './App.vue';

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);
Vue.use(Vuetify);

new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
});
