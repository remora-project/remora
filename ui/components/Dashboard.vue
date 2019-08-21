<template>
  <div class="dashboard">
    <heat-map-wrapper />
  </div>
</template>

<script>
import HeatMapWrapper from './HeatMapWrapper.vue';

export default {
  components: {
    HeatMapWrapper,
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  flex: 1;
  background-color: #ededed;
}
</style>
