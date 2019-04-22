# TX Chart Test

## Design
- Scatter 대신에 Heat Map으로 그리기
    - Scatter는 점의 개수가 많아질 수록 그릴 때 부하가 심해짐
    - [와탭의 히트맵](https://www.whatap.io/apm-java/) 처럼 만들어 보자!


## Vue.js + D3.js
- [Composing D3 Visualizations With Vue.js](https://medium.com/tyrone-tudehope/composing-d3-visualizations-with-vue-js-c65084ccb686)
- [Vue + d3: 줌과 패닝이 가능한 Tree 그래프 그리기](https://dev.zzoman.com/2017/10/27/vue-d3-tree-with-zoom-and-panning/)

### D3.js
- [D3.js 공부 참고사이트](http://codefactory.kr/d3-js-tutorials/)
- [D3.js를 이용한 실시간 Line Chart](https://jeong-pro.tistory.com/149)


## Chart Libraries
> [The Best JavaScript Data Visualization & Charting Libraries 2018](https://www.codewall.co.uk/the-best-javascript-data-visualization-charting-libraries/)  
> [Top Vue.js Chart Components](https://madewithvuejs.com/blog/top-vue-js-chart-components)  
> [Vue.js Examples #Charts](https://vuejsexamples.com/tag/echarts/)

- [Vue Apexcharts](https://apexcharts.com/?ref=madewithvuejs.com)
    - [Example of Heat Map](https://apexcharts.com/docs/chart-types/heatmap-charts/)
- [Frappe Charts](https://github.com/frappe/charts?ref=madewithvuejs.com)
    - Github의 Heat Map과 유사하게 그릴 수 있음
    - [Example of Heat Map](https://frappe.io/charts/docs/basic/heatmap)
- [TOAST UI Chart](https://github.com/nhn/tui.chart)
    - 지원하는 차트의 종류가 많음
    - [Example of Heat Map](http://nhn.github.io/tui.chart/latest/tutorial-example10-02-heatmap-chart-random-series)
- [Chart.JS](https://www.chartjs.org/samples/latest/)
    - 간단한 예제들이 있음: [Samples](https://www.chartjs.org/samples/latest/)
    - Heat map은 지원하지 않음
- [Vue.js + Google Charts](https://github.com/devstark-com/vue-google-charts?ref=madewithvuejs.com)
    - [Google Charts](https://developers.google.com/chart/interactive/docs/gallery/scatterchart)
    - Heat Map은 없고, Scatter Chart만 지원
    - <https://developers.google.com/chart/interactive/docs/gallery/scatterchart>
- [AmCharts](https://www.amcharts.com/)
    - 예제 ([AmChart Showcase](https://codepen.io/collection/AevpRB/))가 많지만 license 구매 필요
    - 참고용으로 보면 좋을 듯
    - [Example of Heat Map](https://codepen.io/team/amcharts/pen/pLOXgO)
