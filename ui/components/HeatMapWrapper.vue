<template>
  <v-flex>
    <heat-map
      :data-set="dataSet"
      @hover="showTooltip"
      @out="tooltip.isActive = false"
    />

    <v-tooltip v-model="tooltip.isActive" :activator="tooltip.id" right>
      <span>Value: {{ tooltip.text }}</span>
    </v-tooltip>
  </v-flex>
</template>

<script>
import * as d3 from 'd3';
import HeatMap from './HeatMap.vue';

export default {
  components: {
    HeatMap,
  },
  data: () => ({
    dataSet: null,
    tooltip: {
      isActive: false,
      id: '',
      text: '',
    },
  }),
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        this.dataSet = await d3.csv(
          'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv',
        );
      } catch (e) {
        console.error(e);
      }
    },
    showTooltip({ id, text }) {
      this.tooltip = {
        isActive: true,
        id,
        text,
      };
    },
  },
};
</script>
