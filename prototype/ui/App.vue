<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  name: 'App',
  data: ()=>({
    message: 'Hello World!',
  }),
}
</script>

<style lang="scss">
h1 {
  color: #41B883;
}
</style>
