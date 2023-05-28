<!-- 中央实时内容区主页 -->
<template>
  <div class="layout_container">
    <Wrapper></Wrapper>
    <el-row :gutter="12">
      <el-col :span="6" style="padding-right:0;">
        <Left></Left>
      </el-col>
      <el-col :span="12">
        <Middle></Middle>
      </el-col>
      <el-col :span="6" style="padding-left:0;">
        <Right></Right>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Left from '@/components/realTimeScrreen/child_layout/left'
import Middle from '@/components/realTimeScrreen/child_layout/middle.vue'
import Right from '@/components/realTimeScrreen/child_layout/right.vue'

import Wrapper from '@/components/realTimeScrreen/wrapper'

export default {
  components: { Left, Wrapper, Right, Middle },
  data () {
    return {}
  }
}
</script>
<style lang='less' scoped>
.layout_container {
  height: 100%;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
    }
  }
}
.wrapper{
  width:15%;
  z-index: 999;
  position: absolute;
  right: 1%;
  top: 5%;
}
</style>
