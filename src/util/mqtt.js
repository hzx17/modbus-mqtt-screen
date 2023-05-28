// import Vue from 'vue'
import {
  Notification
} from 'element-ui'

const mqtt = require('mqtt')
const WS_BASEURL = process.env.NODE_ENV === 'development' ? 'ws://localhost:1884' : 'ws://localhost:1884'
// 本地
const client = mqtt.connect(WS_BASEURL)

// 连接mqtt并订阅
client.on('connect', () => {
  client.subscribe(['isRun', 'modbusData', 'humidity', 'temperature', 'loadData', 'inPeak', 'water1', 'runTime', 'waterState', 'systemState', 'water2', 'rotate', 'error'], {
    qos: 0, retain: true
  }, error => {
    if (!error) {
      Notification({
        title: 'MQTT 订阅成功',
        message: '',
        type: 'success'
      })
      // onMqttMessage()
    } else {
      Notification.error({
        title: 'MQTT 订阅失败',
        message: ''
      })
    }
  })
})
// option src\components\index\content_layout.vue

client.on('error', error => {
  throw error
})

client.on('offline', () => {
  alert('offline')
})

client.on('disconnect', () => {
  alert('disconnect')
})

// Vue.prototype.$MQTT = client

export default client
