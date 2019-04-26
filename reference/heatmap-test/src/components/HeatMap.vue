<template>
  <svg :width="chartSize + margin*1.2" :height="chartSize + margin*2">
    <g :transform="`translate(${margin}, 0)`">
      <g ref="xAxis" :transform="`translate(0, ${chartSize})`"></g>
      <g ref="yAxis"></g>

      <rect
        v-for="(sq, i) in dataSet" :key="i"
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
      ></rect>
    </g>

    <g :transform="`translate(${margin}, ${chartSize + margin*1.5})`">
      <rect
        v-for="(c, idx) in colorSet"
        :key="idx"
        :x="legendSize * idx"
        :width="legendSize"
        :height="legendSize"
        :fill="c"
      ></rect>
    </g>
  </svg>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'HeatMap',
  props: {
    dataSet: {
      type: [Object, Array],
    },
  },
  data: ()=>({
    chartSize: 500,
    margin: 30,
    legendSize: 12,
    colorSet: ['#EBEDF0', '#C6E48B', '#7BC96F', '#239A3B', '#196127'],

    x: null,
    y: null,
    r: 2,
    colors: null,
    opacity: 0.7,
  }),
  mounted() {
    this.setScales();
    this.drawAxes();
  },
  watch: {
    dataSet(data) {
      this.colors = d3.scaleQuantile()
        .domain([0, this.colorSet.length - 1, d3.max(data, d=>d.value)])
        .range(this.colorSet);
    },
  },
  methods: {
    setScales() {
      const N = 10;
      const xAxis = Array.from(new Array(N), (e,i)=>String.fromCharCode(65+i));
      const yAxis = Array.from(new Array(N), (e,i)=>`v${i+1}`);

      const pad = 0.04;
      this.x = d3.scaleBand()
        .range([ 0, this.chartSize ])
        .domain(xAxis)
        .padding(pad);
      this.y = d3.scaleBand()
        .range([ this.chartSize, 0 ])
        .domain(yAxis)
        .padding(pad);
    },
    drawAxes() {
      d3.select(this.$refs.xAxis).call(d3.axisBottom(this.x));
      d3.select(this.$refs.yAxis).call(d3.axisLeft(this.y));
    },

    mouseover(e, sq, i) {
      d3.select(e.target)
        .style('opacity', 1);

      this.$emit('hover', { text: sq.value, id: `.square${i}` });
    },
    mouseleave(e) {
      d3.select(e.target)
        .style('opacity', this.opacity);

      this.$emit('out');
    },
  },
}
</script>

<style lang="scss" scoped>
rect[class^="square"] {
  cursor: pointer;
}
</style>
