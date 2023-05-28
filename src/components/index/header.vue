<!-- 监控面板头部 -->
<template>
  <div class="header_container">
    <Options-Menu></Options-Menu>
    <h1 class="title">工厂暖通空调监控系统</h1>
    <h5 class="time">{{DateTime}}</h5>
    <div class="decoration">
      <dv-decoration-10 style="width:calc(50% - 24vw);height:.5rem" />
      <dv-decoration-8
        :reverse="true"
        style="width:16vw;height:1.25rem;"
        :color="['#568aea', 'transparent']"
      />
      <dv-decoration-6 :color="['#50e3c2', '#67a1e5']" style="width:16vw;height:1rem;" />
      <dv-decoration-8 style="width:16vw;height:1.25rem;" :color="['#568aea', 'transparent']" />
      <dv-decoration-10 style="width:calc(50% - 24vw);height:.5rem;transform: rotate(180deg);" />
    </div>
  </div>
</template>
<script>
import OptionsMenu from './dropdown'
export default {
  components: { OptionsMenu },
  data () {
    return {
      DateTime: ''
    }
  },
  created () {
    this.timeInterval()
  },
  methods: {
    timeInterval () {
      const timer = setInterval(() => {
        this.dateFormat()
      }, 1000)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
      })
    },
    dateFormat () {
      const date = new Date()
      const arr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      const number = date.getDay()
      const year = date.getFullYear()
      const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      this.DateTime = arr[number] + '»' + year + '-' + month + '-' + day + '»' + hours + ':' + minutes + ':' + seconds
    }
  }
}
</script>
<style lang='less' scoped>
.header_container {
  height: 100%;
  width: 100%;
  margin-top: -10px;
  position: relative;
  .dropdown_container {
    position: absolute;
    top: 25%;
    left: 1%;
    z-index: 999;
  }

  .title {
    color: white;
    position: absolute;
    margin: 0;
    left: 50%;
    top: 50%;
    padding-top: .8rem;
    font-size: 1.6rem;
    transform: translate(-50%, -50%);
  }

  .time {
    position: absolute;
    top: 35%;
    margin: 0;
    right: 1%;
    font-size: 1.0rem;
    color: #fff;
  }
  .decoration {
    position: absolute;
    width: 100%;
    margin-top: 2.0rem;
    display: flex;
    justify-content: center;
    left: 50%;
    top: 50%;
    font-size: 40px;
    transform: translate(-50%, -50%);
    .dv-decoration-8 {
      margin: -15px 20px 0;

      transform: rotateX(180deg);
    }
    .dv-decoration-10 {
      margin-top: -6px;
    }
  }
}
</style>
