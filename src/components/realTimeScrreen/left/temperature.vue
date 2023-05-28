<template>
  <div class="temperature_container" id="temperature_container">
    <div class="temperatrue_title">
      <span class="el-icon-odometer">温度监控</span>
      <dv-decoration-1 />
    </div>
    <dv-decoration-9>{{this.$store.state.temperature}}℃</dv-decoration-9>
  </div>
</template>
<style lang='less' scoped>
.temperature_container {
  height: 100%;
  width: 100%;
  .temperatrue_title {
    height: 35%;
    display: flex;
    justify-content:center;
    flex-direction: row;
    padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 4%;
    box-sizing: border-box;
    span {
      font-size: 1.25rem;
      color: @title-color;
      min-width: 100px;
      // font-weight: bold;
    }
    .dv-decoration-1 {
      width: 30%;
      height: 1.4rem;
    }
  }

  .dv-decoration-9 {
    color: @context-color;
    font-weight: bolder;
    margin: 0 auto;
    font-size: 1.5rem;
    width: 65%;
    height: 65%;
  }
}
</style>
