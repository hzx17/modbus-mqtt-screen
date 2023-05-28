// create an empty modbus client
var ModbusRTU = require("modbus-serial")
var ModbusRTUClient = new ModbusRTU();

// open connection to a tcp line
// 创建Modbus TCP连接，IP是127.0.0.1,端口502
ModbusRTUClient.connectTCP("127.0.0.1", { port: 502 });


module.exports = ModbusRTUClient