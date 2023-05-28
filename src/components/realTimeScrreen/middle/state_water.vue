<template>
  <div class="bg">
    <div class="line">
      <div :class="isCon == '运行正常' ? 'state-content-true': 'state-content-false'">当前供水{{isCon}}
      </div>
        <dv-decoration-6 :color="trueCol" v-if="isCon == '运行正常'" />
        <dv-decoration-6 :color="falseCol" v-else />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCon: '运行正常',
      trueState: '运行正常',
      falseState: '存在异常',
      falseCol: ['#e062ae', '#FF0000'],
      trueCol: ['#50e3c2', '#67a1e5']
    }
  },
  created () {
    this.$vm.$on('waterState', data => {
      this.isCon = data
    })
  }
}
</script>
<style lang='less' scoped>
.bg {
  display: flex;
  padding: 1rem;
  flex-direction: row;
  // height: 5rem;
  justify-content: space-evenly;
  .line {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .state-content-true {
      width: 38rem;
      height: 3rem;
      background-image: linear-gradient(#50e3c251,#67a1e550);
      color: @title-color;
      font-size: 1.5rem;
      text-align: center;
      line-height: 3rem;
    }
    .state-content-false {
      width: 38rem;
      height: 3rem;
      background-image: linear-gradient(#e062ae51,#FF000050);
      color: red;
      font-size: 1.5rem;
      text-align: center;
      line-height: 3rem;
    }
    span {
      float: left;
      color: @title-color;
      font-weight: bold;
      text-align: center;
      line-height: 150%;
      cursor: pointer;
      min-width: 180px;
    }
    .dv-decoration-6 {
      width: 100%;
      height: 2.5rem;
    }
  }
}
</style>
