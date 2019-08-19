<template>
  <v-app>
    <dashboard />
    <drilldown-panel />
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
import DrilldownPanel from './components/DrilldownPanel.vue';

export default {
  components: {
    Dashboard,
    DrilldownPanel,
  },
};
</script>

<style lang="scss">
html {
  overflow: auto;
}

#app > div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>
