<template>
  <div id="app">
    <!-- <line-chart /> -->
    <!-- <heat-map-pure /> -->
    <heat-map />
  </div>
</template>

<script>
import LineChart from './components/LineChart.vue';
import HeatMap from './components/HeatMap.vue';
import HeatMapPure from './components/HeatMapPure.vue';

export default {
  name: 'App',
  components: {
    LineChart,
    HeatMap,
    HeatMapPure,
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
