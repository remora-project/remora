<template>
  <svg :width="chartSize" :height="chartSize">
    <g :transform="`translate(${margin}, 0)`">
      <g ref="xAxis" :transform="`translate(0, ${chartSize - margin})`" />
      <g ref="yAxis" />

      <rect
        v-for="(sq, i) in dataSet"
        :key="i"
        :class="`square${i}`"
        :x="x(sq.group)"
        :y="y(sq.variable)"
        :rx="r"
        :ry="r"
        :width="x.bandwidth()"
        :height="y.bandwidth()"
        :fill="colors(sq.value)"
        :opacity="opacity"
        @mouseover="mouseover($event, sq, i)"
        @mouseleave="mouseleave($event)"
      />
    </g>
  </svg>
</template>

<script>
import * as d3 from 'd3';

export default {
  props: {
    dataSet: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data: () => ({
    chartSize: 500,
    margin: 30,
    colorSet: ['#EBEDF0', '#C6E48B', '#7BC96F', '#239A3B', '#196127'],

    x: null,
    y: null,
    r: 2,
    colors: null,
    opacity: 0.7,
  }),
  watch: {
    dataSet(data) {
      this.colors = d3
        .scaleQuantile()
        .domain([0, this.colorSet.length - 1, d3.max(data, d => d.value)])
        .range(this.colorSet);
    },
  },
  mounted() {
    this.setScales();
    this.drawAxes();
  },
  methods: {
    setScales() {
      const N = 10;
      const xAxis = Array.from(new Array(N), (e, i) => {
        return String.fromCharCode(65 + i);
      });
      const yAxis = Array.from(new Array(N), (e, i) => {
        return `v${i + 1}`;
      });

      const pad = 0.04;
      this.x = d3
        .scaleBand()
        .range([0, this.chartSize - this.margin])
        .domain(xAxis)
        .padding(pad);
      this.y = d3
        .scaleBand()
        .range([0, this.chartSize - this.margin])
        .domain(yAxis)
        .padding(pad);
    },
    drawAxes() {
      const { xAxis, yAxis } = this.$refs;
      d3.select(xAxis).call(d3.axisBottom(this.x));
      d3.select(yAxis).call(d3.axisLeft(this.y));
    },

    mouseover(e, sq, i) {
      d3.select(e.target).style('opacity', 1);
      this.$emit('hover', {
        text: sq.value,
        id: `.square${i}`,
      });
    },
    mouseleave(e) {
      d3.select(e.target).style('opacity', this.opacity);
      this.$emit('out');
    },
  },
};
</script>

<style lang="scss" scoped>
rect[class^='square'] {
  cursor: pointer;
}
</style>
