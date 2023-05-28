# 总体架构
  该暖通空调在前面的内容中已经明确是基于工业互联网技术来进行设计开发，而在工业互联网技术中大多是基于五层模型，而本系统也大致参照了计算机五层模型。该系统使用了Modbus协议完成数据的获取工作，通过Mqtt协议与后端进行连接，获取了数据，完成了数据采集工作。后端通过对数据的处理，进行了数据存储，和接口api的处理。通过WebSocket协议来推送数据。前端展示请求的后端数据。通过此流程完成了工业暖通空调系统的开发。


# 实现效果
![主页面]('https://github.com/hzx17/modbus-mqtt-screen/blob/main/src/assets/%E5%9B%BE%E7%89%871.png')
![历史页面]('https://github.com/hzx17/modbus-mqtt-screen/blob/main/src/assets/%E5%9B%BE%E7%89%872.png')