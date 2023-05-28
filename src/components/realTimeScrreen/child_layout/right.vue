<template>
  <div class="right_container">
    <Target :title="'产品指标'"></Target>
    <!-- <Control></Control> -->
    <Map></Map>
  </div>
</template>
<script>
// import Control from '../right/control'
import Target from '../right/logger.vue'
import Map from '../right/map.vue'
export default {
  components: { Target, Map },
  data () {
    return {
      val1: '0',
      val10: '0'
    }
  },
  created () {
    this.$vm.$on('pm1', data => {
      this.val1 = data
    })
    this.$vm.$on('pm10', data => {
      this.val10 = data
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.right_container {
  display: flex;
  flex-direction: column;
  height: 100%;
  // > :first-child {
  //   height: 20%;
  // }
  // > :nth-child(2) {
  //   height: 20%;
  //   .title {
  //     position: relative;
  //     height: 50px;
  //     margin-top: -5px;
  //     span {
  //       color: #ffffff;
  //       font-size: 1.4rem;
  //       line-height: 40px;
  //     }

  //     img {
  //       position: absolute;
  //       left: 0;
  //       width: 100%;
  //       bottom: 5px;
  //     }
  //   }
  //   .el-col {
  //     height: calc(100% - 50px);
  //   }
  // }
  // > :nth-child(3) {
  //   height: 30%;
  // }
  // > :last-child {
  //   height: 40%;
  // }
}
</style>
