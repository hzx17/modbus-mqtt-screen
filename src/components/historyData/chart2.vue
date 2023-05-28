<template>
  <dv-border-box-1
    id="div_light"
    backgroundColor="rgba(19, 25, 47, 0.6)"
    :color="[isdanger ? '#FF0000':'#32c5e9']"
    class="dv-chart"
  >
    <h4 class="title el-icon-cpu">{{title ? title : '耗电量(度)'}}</h4>
    <!-- <span class="numShow">近5日用电量{{num}} kW</span> -->
    <ve-line
      :height="height+'px'"
      :data="chartData"
      :settings="chartSettings"
      :legend="legend"
      :colors="colors"
      :extend="extend"
    ></ve-line>
  </dv-border-box-1>
</template>
<script>
import { RESIZE } from '@/util/resizeFuc'
export default {
  props: ['title'],
  data () {
    return {
      height: '260',
      isdanger: false,
      num: '1234',
      extend: {
        'xAxis.0.axisLabel.color': 'white',
        'yAxis.0.axisLabel.color': 'white'
      },
      legend: {
        textStyle: {
          color: 'white',
          fontSize: 20
        }
        // right: '5%'  // 顶部标签位子
      },
      colors: ['#20DBFD'],
      chartData: {
        columns: ['time', '用电量'],
        rows: []
      },
      chartSettings: {
        metrics: ['用电量'],
        dimension: ['time'],
        area: true,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#36d1dc' // 0% 处的颜色 #20DBFD
              },
              {
                offset: 1,
                color: '#5b86e5' // 100% 处的颜色 #1AAFCA
              }
            ],
            global: false // 缺省为 false
          }
        }
      }
    }
  },
  created () {
    this.$http.get('/my/powerinfo').then(response => {
      const data = response.data.data
      this.chartData.rows = data
    })
  },
  mounted () {
    RESIZE(this, () => {
      this.height = document.getElementById('div_light')?.offsetHeight + 10
      this.legend.textStyle.fontSize = this.height / 20
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.title{
  font-size: 1.5rem;
  color:@title-color !important;
}
</style>
