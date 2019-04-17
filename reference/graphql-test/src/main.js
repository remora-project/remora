import Vue from 'vue';
import VueApollo from 'vue-apollo';

import apolloClient from './apolloClient';
import App from './App.vue';

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);

new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App)
});
