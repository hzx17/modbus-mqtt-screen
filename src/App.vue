<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import client from '@/util/mqtt'
export default {
  name: 'app',
  provide () { // 父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true // 控制视图是否显示的变量
    }
  },
  mounted () {
    // 挂载完成连接mqtt
    this.onMqttMessage()
  },
  methods: {
    onMqttMessage () {
      client.on('message', (topic, message) => {
        // message = JSON.parse(message)
        // console.log('onMqttMessage -> ', topic, message)
        switch (topic) {
          case 'isRun':
            this.$vm.$emit('isrun', message)
            break
          case 'modbusData':
            this.$vm.$emit('modbusData', message)
            break
          case 'temperature':
            this.$vm.$emit('temperature', message)
            break
          case 'humidity':
            this.$vm.$emit('humidity', message)
            break
          case 'inPeak':
            this.$vm.$emit('inPeak', message)
            break
          case 'loadData':
            this.$vm.$emit('loadData', message)
            break
          case 'water1':
            this.$vm.$emit('water1', message)
            break
          case 'runTime':
            this.$vm.$emit('runTime', message)
            break
          case 'systemState':
            this.$vm.$emit('systemState', message)
            break
          case 'waterState':
            this.$vm.$emit('waterState', message)
            break
          case 'water2':
            this.$vm.$emit('water2', message)
            break
          case 'rotate':
            this.$vm.$emit('rotate', message)
            break
          case 'error':
            this.$vm.$emit('error', message)
            break
        }
      })
    },
    reload () {
      this.isRouterAlive = false // 先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true // 再打开
      })
    }
  }
}
</script>

<style>
</style>
