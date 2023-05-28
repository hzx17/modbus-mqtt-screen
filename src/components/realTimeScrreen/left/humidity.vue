<template>
  <div class="humidity_container">
      <span>湿度</span>
      <dv-decoration-5 style="width:80%;height:40px;" />
      <dv-water-level-pond :config="config" :key="key"/>
  </div>
</template>
<script>
import { RESIZE } from '@/util/resizeFuc'
export default {
  data () {
    return {
      val: 0,
      key: 1,
      config: {
        data: [this.$store.state.humidity - 20, this.$store.state.humidity],
        shape: 'roundRect',
        formatter: '{value}%',
        waveNum: 3
      }
    }
  },
  created () {
    this.$vm.$on('humidity', data => {
      this.config.data[0] = parseFloat(data - 20)
      this.config.data[1] = parseFloat(data)
      this.key++
    })
  },
  mounted () {
    RESIZE(this, () => {
      // console.log(11111111)
      this.key++
    })
  },
  methods: {
  }
}
</script>
<style lang='less' scoped>
.humidity_container{
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    span{
        color: @title-color;
        text-shadow: 0 0 25px #00d8ff;
        font-weight: bolder;
        top: 3%;
        font-size: 1.25rem;
        position: absolute;
    }
    .dv-decoration-5 {
        margin: 10%  auto;
    }
    .dv-water-pond-level{
        height:60%;
        width: 100%;
        color: red;
        position: absolute;
        bottom: 0;
        /deep/ text {
          font-size: 1.5rem;
        }
    }
}
</style>
