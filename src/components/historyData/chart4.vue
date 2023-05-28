<template>
  <dv-border-box-12 class="system_use" id="div_target_system" backgroundColor="rgba(19, 25, 47, 0.6)">
    <div class="title">
      <dv-decoration-3 />
      <span>空调使用率55%</span>
      <dv-decoration-3 />
    </div>
    <dv-charts :option="option" />
  </dv-border-box-12>
</template>
<script>
import { RESIZE } from '@/util/resizeFuc'
export default {
  data () {
    return {
      key: 0,
      option: {
        series: [
          {
            type: 'gauge',
            data: [{ name: 'itemA', value: 55 }],
            center: ['50%', '55%'],
            axisLabel: {
              formatter: '{value}%',
              style: {
                fill: '#fff',
                fontSize: 2
              }
            },
            axisTick: {
              style: {
                stroke: '#fff'
              }
            },
            animationCurve: 'easeInOutBack'
          }
        ]
      }
    }
  },
  mounted () {
    RESIZE(this, () => {
      const size = document.getElementById('div_target_system')?.offsetWidth
      this.option.series[0].axisLabel.style.fontSize = size / 30
    })
  },
  methods: {
  }
}
</script>
<style lang='less' scoped>
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  height: 20px;
  width: 100%;
  top: 4%;
  padding: 0 5%;
  box-sizing: border-box;
  color: #fff;
  .dv-decoration-3 {
    width: 25%;
    height: 100%;
  }
  span {
    font-weight: bolder;
  }
}
.system_use {
  width: 50%;
}
</style>
