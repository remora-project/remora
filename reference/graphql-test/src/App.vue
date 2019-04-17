<template>
  <div id="app">
    <h1>GraphQL TEST</h1>
    <user-list />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';

export default {
  name: 'App',
  components: {
    UserList,
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;

  h1 {
    color: #41B883;
  }
}
</style>
