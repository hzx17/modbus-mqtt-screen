<template>
  <div class="middle_container">
      <div style="display: flex;justify-content: center;align-items: center; flex-direction: column; height: 100%;">
        <StateSystem></StateSystem>
        <img src="@/assets/d5dff79a977adde1a1cf095856dca255(1).png" style="width: 80%" alt="">
        <StateWater></StateWater>
      </div>
  </div>
</template>
<script>
import StateSystem from '../middle/state_system'
import StateWater from '../middle/state_water'
export default {
  components: { StateSystem, StateWater },
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>
<style lang='less' scoped>
</style>
