import Vue from 'vue';
import VueApollo from 'vue-apollo';

import apolloClient from './apolloClient';

Vue.use(VueApollo);

export default new VueApollo({
  defaultClient: apolloClient,
});;
