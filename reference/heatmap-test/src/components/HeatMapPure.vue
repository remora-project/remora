<template>
  <div></div>
</template>

<script>
import * as d3 from 'd3';

const width = 500,
  height = width;
const margin = 30;

const N = 10;
const xAxis = Array.from(new Array(N), (e,i)=>String.fromCharCode(65+i));
const yAxis = Array.from(new Array(N), (e,i)=>`v${i+1}`);

const colors = d3.scaleLinear()
  .range(['#FFF', '#76BF8A'])
  .domain([1, 100]);

export default {
  name: 'HeatMap',
  mounted() {
    const svg = d3.select(this.$el)
      .append('svg')
      .attr('width', width + margin)
      .attr('height', height + margin)
      .append('g')
      .attr('transform', `translate(${margin}, 0)`);

    const x = d3.scaleBand()
      .range([ 0, width ])
      .domain(xAxis)
      .padding(0.02);
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    const y = d3.scaleBand()
      .range([ height, 0 ])
      .domain(yAxis)
      .padding(0.02);
    svg.append('g')
      .call(d3.axisLeft(y));

    this.drawSquares(svg, x, y);
  },
  methods: {
    async drawSquares(svg, x, y) {
      try {
        const data = await d3.csv('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv');

        svg.selectAll()
          .data(data, ({ group, variable })=>`${group}:${variable}`)
          .enter()
          .append('rect')
          .attr('x', ({ group })=>x(group))
          .attr('y', ({ variable })=>y(variable))
          .attr('width', x.bandwidth())
          .attr('height', y.bandwidth())
          .style('fill', ({ value })=>colors(value));
      } catch(e) {
        console.error(e);
      }
    }
  },
}
</script>
