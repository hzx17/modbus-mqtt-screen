const moment = require('moment');
// 数组转化为buffer
const toBuffer = require('typedarray-to-buffer');
const mqtt = require('mqtt');
const MqttServer = require('./server');
const uartDataFormat = require('../utils/uartDataFormat')
const ModbusRTUClient = require('./modbus-port.js');
const client1 = mqtt.connect('mqtt://127.0.0.1:1883');

// 启动时间
let startTime = moment().format("YYYY-MM-DD HH:mm:ss")
setInterval(() => {
  ModbusRTUClient.readHoldingRegisters(0, 12, function(err, data){
    // 转化为buffer数据，这样mqtt才能推送
    let res = data.data
    let value =  toBuffer(res);
    // 整体数据，大于256和小数单独传递
    client1.publish("modbusData", value, { qos: 0, retain: true });
    // 回路负荷数据传递,保留一位小数
    let loadData = (res[4] /1000 ).toFixed(1)
    client1.publish("loadData", loadData.toString(), { qos: 0, retain: true });
    // 吸气压力数据处理传递
    let inPeak = (res[5] /1000 ).toFixed(1)
    client1.publish("inPeak", inPeak.toString(), { qos: 0, retain: true });
    // 风机转速处理
    let rotate = (res[7] /1000 ).toFixed(1)
    client1.publish("rotate", rotate.toString(), { qos: 0, retain: true });
    // 水压处理
    let water1 = (res[10] /100 ).toFixed(1)
    client1.publish("water1", water1.toString(), { qos: 0, retain: true });
    let water2 = (res[11] /100 ).toFixed(1)
    client1.publish("water2", water2.toString(), { qos: 0, retain: true });
  
    // 当前时间
    let currentTime = moment().format("YYYY-MM-DD HH:mm:ss")
    // 计算两个时间相差秒数(时间差单位可以是years,months,days,minutes,seconds)
    let timeDiff = moment(currentTime).diff(moment(startTime), "seconds")
    // 小时
    let timeH = (timeDiff / 3600).toFixed(2)
    client1.publish("runTime", timeH.toString(), { qos: 0, retain: true });

    // 水温控制状态 
    if (res[9] > 60) {
      client1.publish("waterState", '水温过高', { qos: 0, retain: true });
    } else if (res < 16) {
      client1.publish("waterState", '水温过低', { qos: 0, retain: true });
    } else {
      client1.publish("waterState", '运行正常', { qos: 0, retain: true });
    }
});
}, 1000);

let state1=1,state2=1  //设备状态码存储
MqttServer.on('published', (packet, client) => {
    //当客户端有连接发布主题消息
    var topic = packet.topic;
    // 前端启动开始数据推送
    switch (topic) {
        case 'lightState':
            //硬件 灯控制
            console.log('lightState', packet.payload.toString());
            client1.publish('isLight', JSON.stringify(false), { qos: 0, retain: true })
            break;
        case 'runState':
            // 设备状态改变 同步
            console.log('runState',JSON.parse(packet.payload.toJSON()));
            client1.publish('isRun', `[${state1},${state2}]`, { qos: 0, retain: true });
            break;
        case 'reality/up':
          // 温湿度控制
          let humidityData =  uartDataFormat(JSON.parse(packet.payload.toString()).value, 10)
          console.log('当前温湿度为'+ uartDataFormat(JSON.parse(packet.payload.toString()).value, 6)+'度' + humidityData + '%')
          client1.publish("temperature", uartDataFormat(JSON.parse(packet.payload.toString()).value, 6).toString(), { qos: 0, retain: true });
          client1.publish("humidity", uartDataFormat(JSON.parse(packet.payload.toString()).value, 10).toString(), { qos: 0, retain: true });
           // 温度控制状态 
          if (humidityData > 70) {
            client1.publish("systemState", '湿度过高', { qos: 0, retain: true });
          } else if (humidityData < 16) {
            client1.publish("systemState", '湿度过低', { qos: 0, retain: true });
          } else {
            client1.publish("systemState", '运行正常', { qos: 0, retain: true });
          }
    }
});