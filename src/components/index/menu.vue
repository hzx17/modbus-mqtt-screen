<template>
  <div>
    <el-menu :default-active="this.$router.currentRoute.fullPath == '/index' ? '1' :'2'" class="el-menu-horizontal-demo" mode="horizontal">
      <el-menu-item index="1" @click="jump('/index')">
          <i class="el-icon-menu"></i>
          <span slot="title">系统主页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="jump('/index/historical')">
          <i class="el-icon-s-data"></i>
          <span slot="title">历史数据</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style lang="less">
.el-menu-horizontal-demo {
  background-color: rgba(00, 00, 00, 00);
  .is-active {
    background-image: linear-gradient(rgba(00, 00, 00, 00),#20dbfd);
  }
  .el-menu-item:hover ,:focus {
    background-color: rgba(00, 00, 00, 00) !important;
  }
  .el-menu-item {
    line-height: 4rem;
    height: 4rem;
    font-weight: 700;
    color: #fff !important;
    padding: 0 1rem;
    font-size: 1.5rem;
  }
}
</style>

<script>
export default {
  methods: {
    jump (url) {
      this.$router.push(url, () => {}, () => {})
    }
  }
}
</script>
