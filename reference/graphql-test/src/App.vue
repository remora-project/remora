<template>
  <div id="app">
    <v-app>
      <h1>GraphQL TEST</h1>
      <v-layout>
        <v-flex xs12 md4>
          <user-form />
        </v-flex>
        <v-flex xs12 md8>
          <user-list />
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue';
import UserList from './components/UserList.vue';

export default {
  name: 'App',
  components: {
    UserForm,
    UserList,
  }
}
</script>

<style lang="scss">
html {
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;

  h1 {
    padding: 8px 16px;
    color: #41B883;
  }
}
</style>
