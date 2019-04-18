<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-text-field
        v-model="id"
        :rules="idRules"
        label="ID"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="20"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="primary"
        @click="addUser"
      >
        submit
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'UserForm',
  data: ()=>({
    valid: false,
    id: '',
    idRules: [
      v => !!v || 'ID is required',
    ],
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length < 20) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    addUser() {
      if(!this.$refs.form.validate()) { return; }

      const { id, name, email } = this;
      this.$apollo.mutate({
        mutation: gql`mutation($id: String!, $name: String!, $email: String!) {
          addUser(id: $id, name: $name, email: $email) {
            id,
            name,
            email
          }
        }`,
        variables: {
          id,
          name,
          email,
        },
      }).then(data=>{
        console.log('addUser():', data);
        this.$refs.form.reset();
        this.$root.$emit('userAdded');
      }).catch(err=>{
        console.error('addUser():', err);
      });
    },
  },
}
</script>
