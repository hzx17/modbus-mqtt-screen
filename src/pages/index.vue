<!-- 系统主页 -->
<template>
  <div class="index_container">
    <el-container>
      <el-header style="height: 3rem">
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-aside width="100%"><Menu></Menu></el-aside>
    </el-container>
  </div>
</template>
<script>
import Header from '@/components/index/header.vue'
import Menu from '../components/index/menu.vue'
export default {
  components: { Header, Menu },
  data () {
    return {
      temperature: 0,
      humidity: 40
    }
  },
  created () {
    this.$vm.$on('temperature', data => {
      this.$store.commit('changeTemperature', parseInt(data))
    })
    this.$vm.$on('humidity', data => {
      this.$store.commit('changeHumidity', parseFloat(data))
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.index_container {
  background: url("~@/assets/pageBg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;

  .el-container {
    height: 100%;
    overflow: hidden;

    .el-header {
      padding: 0;
    }

    .el-main{
      padding: 0 10px 4rem;
    }
    .el-aside {
      position: absolute;
      overflow: hidden;
      bottom: 0px;
    }
  }
}
</style>
