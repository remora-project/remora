<template>
  <v-container>
    <v-list two-line>
      <template v-for="(user, index) in users">
        <v-list-tile :key="user.id">
          <v-list-tile-avatar>
            <v-icon class="blue darken-2 white--text">tag_faces</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon ripple @click="deleteUser(user, index)">
              <v-icon color="red darken-2">clear</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider
          v-if="index + 1 < users.length"
          :key="'#'+index"
          :inset="true"
        ></v-divider>
      </template>
    </v-list>
  </v-container>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'UserList',
  mounted() {
    this.$root.$on('userAdded', ()=>{
      this.$apollo.queries.users.refetch();
    });
  },
  apollo: {
    users: gql`query {
      users {
        id
        name
        email
      }
    }`,
  },
  data: ()=>({
    users: [],
  }),
  methods: {
    deleteUser({ id }, index) {
      this.$apollo.mutate({
        mutation: gql`mutation($id: String!) {
          deleteUser(id: $id) {
            id,
            name,
            email
          }
        }`,
        variables: {
          id,
        },
      }).then(data=>{
        console.log('deleteUser():', data);
        this.users.splice(index, 1);
      }).catch(err=>{
        console.error('deleteUser():', err);
      });
    },
  }
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
