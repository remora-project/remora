import Vue from 'vue';
import Vuex from 'vuex';
import gql from 'graphql-tag';

import apolloClient from '../apollo/client';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  getters: {
    users: state => state.users,
  },
  actions: {
    async fetchUsers({ commit }) {
      const { data } = await apolloClient.query({
        query: gql`query {
          users {
            id
            name
            email
          }
        }`,
      });

      commit('setUsers', data.users);
    },
  },
});
