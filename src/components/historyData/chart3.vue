<template>
  <dv-border-box-12 class="system_use" backgroundColor="rgba(19, 25, 47, 0.6)">
    <div class="title">
      <dv-decoration-3 />
      <span>本周与上周功耗平均对比</span>
      <dv-decoration-3 />
    </div>
    <dv-active-ring-chart :config="config" :key="key" style="width:100%;height:100%;" />
  </dv-border-box-12>
</template>
<script>
import { RESIZE } from '@/util/resizeFuc'
export default {
  data () {
    return {
      key: 0,
      config: {
        data: [
          {
            name: '上周',
            value: 120
          },
          {
            name: '本周',
            value: 55
          }
        ],
        color: ['#e062ae', '#32c5e9']
      }
    }
  },
  mounted () {
    RESIZE(this, () => {
      this.key++
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
    text-align: center;
  }
}
.system_use {
  width: 50%;
}
</style>
