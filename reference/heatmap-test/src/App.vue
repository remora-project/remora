<template>
  <div id="app">
    <v-app>
      <!-- <line-chart /> -->
      <!-- <pure-heat-map /> -->
      <heat-map />
    </v-app>
  </div>
</template>

<script>
// import LineChart from './components/LineChart.vue';
// import PureHeatMap from './components/PureHeatMap.vue';
import HeatMap from './components/HeatMap.vue';

export default {
  name: 'App',
  components: {
    // LineChart,
    // PureHeatMap,
    HeatMap,
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;

  h1 {
    color: #41B883;
  }
}
</style>
