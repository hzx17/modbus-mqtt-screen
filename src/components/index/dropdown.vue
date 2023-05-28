<!-- <template>
  <div class="dropdown_container">
    <el-popover
    placement="top-start"
    title="标题"
    width="10vw"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <i slot="reference" class="el-dropdown-link el-icon-setting el-icon--right"></i>
  </el-popover>
    <el-dropdown>
      <el-dropdown-menu slot="dropdown">
        <i class="el-dropdown-link el-icon-mouse el-icon--right"></i>
        <el-dropdown-item icon="el-icon-folder-opened" @click.native="EXCEL">Excel打包</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" @click.native="SIGNOUT">退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { SIGNOUT } from '@/util/DropDown_Menu/signout.js'
import { EXCEL } from '@/util/DropDown_Menu/getExcel.js'

export default {
  data () {
    return {}
  },
  created () {},
  methods: {
    SIGNOUT,
    EXCEL
  }
}
</script>
<style lang='less' scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  font-size: 2.0rem;
}
.el-button {
  padding: 0;
  background-color: black;
}
</style> -->
<template>
  <div class="dropdown_container">
    <el-dropdown>
      <i class="el-dropdown-link el-icon-setting el-icon--right"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-folder-opened" @click.native="EXCEL">Excel打包</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" @click.native="SIGNOUT">退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { SIGNOUT } from '@/util/DropDown_Menu/signout.js'
import { EXCEL } from '@/util/DropDown_Menu/getExcel.js'
export default {
  data () {
    return {}
  },
  created () {},
  methods: {
    SIGNOUT,
    EXCEL
  }
}
</script>
<style lang='less' scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  font-size: 2.0rem;
}
.el-button {
  padding: 0;
  background-color: black;
}
</style>
