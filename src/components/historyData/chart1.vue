<template>
  <dv-border-box-12 backgroundColor="rgba(19, 25, 47, 0.6)" id="div_target" class="dv-chart">
    <h4 class="title el-icon-odometer">{{title ? title : '供水1区与供水2区历史使用量(吨)' }}</h4>
    <ve-line :data="chartData" :settings="chartSettings" :height="height+'px'" :legend="legend" :y-axis="yAxis" :x-axis="xAxis" :colors="colors"></ve-line>
  </dv-border-box-12>
</template>
<script>
import { RESIZE } from '@/util/resizeFuc'
export default {
  props: ['title'],
  data () {
    return {
      height: 260,
      colors: ['#fb7293', '#5ab1ef'],
      chartSettings: {
        metrics: ['供水1区', '供水2区'],
        dimension: ['time'],
        area: true,
        itemStyle: {
          lineStyle: {
            width: 10
          }
        }
      },
      legend: {
        textStyle: {
          color: 'white',
          fontSize: 20
        },
        right: '2%'
      },
      chartData: {
        columns: ['time', '供水1区', '供水2区'],
        rows: []
      },
      xAxis: [
        {
          data: [],
          axisLabel: {
            show: true,
            textStyle: {
              color: 'white',
              fontSize: 20
            }
          }
        }
      ],
      yAxis: [
        {
          axisLabel: {
            show: true,
            textStyle: {
              color: 'white'
            }
          },
          axisLine: {
            show: true, // 是否显示Y轴线
            lineStyle: {
              color: '#fff', // Y轴线颜色
              width: 2, // 线的大小
              type: 'solid'// Y轴线的类型
            }
          },
          offset: 6 // 偏移量
        }
      ]
    }
  },
  mounted () {
    RESIZE(this, () => {
      this.height = document.getElementById('div_target')?.offsetHeight + 10
      this.legend.textStyle.fontSize = this.height / 20
      // this.xAxis.axisLabel.fontSize = this.height / 20
    })
  },
  methods: {},
  created () {
    this.$http.get('/my/waterinfo').then(response => {
      const data = response.data.data
      this.xAxis[0].data = data[0]
      this.chartData.rows = data[1]
    })
  }
}
</script>
<style lang='less' scoped>
.title{
  font-size: 1.5rem;
  color:@title-color !important;
}
</style>
