<template>
  <svg width="500" height="270">
    <g style="transform: translate(10px, 0)">
      <path :d="line" />
    </g>
  </svg>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'LineChart',
  data: ()=>({
    data: [99, 71, 78, 25, 36, 92],
    line: '',
  }),
  mounted() {
    this.calcPath();
    // const svg = d3.select(this.$el)
    //   .append('svg')
    //   .attr('width', 500)
    //   .attr('height', 270)
    //   .append('g')
    //   .attr('transform', 'translate(0, 10)');

    // const x = d3.scaleLinear().range([0, 430]);
    // const y = d3.scaleLinear().range([210, 0]);
    // d3.axisLeft().scale(x);
    // d3.axisTop().scale(y);
    // x.domain(d3.extent(data, (d, i)=>i));
    // y.domain([0, d3.max(data, d=>d)]);

    // const createPath = d3.line()
    //   .x((d, i)=>x(i))
    //   .y(d=>y(d));
    // svg.append('path').attr('d', createPath(data));
  },
  methods: {
    getScales() {
      const x = d3.scaleLinear().range([0, 430]);
      const y = d3.scaleLinear().range([210, 0]);
      d3.axisLeft().scale(x);
      d3.axisTop().scale(y);
      x.domain(d3.extent(this.data, (d, i)=>i));
      y.domain([0, d3.max(this.data, d=>d)]);

      return { x, y };
    },
    calcPath() {
      const { x, y } = this.getScales();

      const path = d3.line()
        .x((d, i)=>x(i))
        .y(d=>y(d));
      this.line = path(this.data);
    },
  },
}
</script>

<style lang="scss" scoped>
svg {
  path {
    fill: none;
    stroke: #76BF8A;
    stroke-width: 3px;
  }
}
</style>
