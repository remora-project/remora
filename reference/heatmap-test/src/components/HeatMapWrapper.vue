<template>
  <v-flex>
    <heat-map @hover="showTooltip" @out="tooltip.isActive = false" />

    <v-tooltip right :activator="tooltip.id" v-model="tooltip.isActive">
      <span>Value: {{ tooltip.text }}</span>
    </v-tooltip>
  </v-flex>
</template>

<script>
import HeatMap from './HeatMap.vue';

export default {
  components: {
    HeatMap,
  },
  data: ()=>({
    tooltip: {
      isActive: false,
      id: '',
      text: '',
    },
  }),
  methods: {
    showTooltip({ id, text }) {
      this.tooltip = {
        isActive: true,
        id,
        text,
      };
    },
  },
}
</script>
