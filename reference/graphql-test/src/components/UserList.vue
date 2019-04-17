<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<script>
import gql from 'graphql-tag';

export default {
  apollo: {
    users: gql`query users {
      users {
        name
      }
    }`,
  },
  data() {
    return {
      users: [],
    };
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  color: #36495D;
  font-size: 20px;
}
</style>
