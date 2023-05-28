const mosca = require('mosca'); 
//构建自带服务器  1883 为mqtt 1884 为前端websocket通讯端口  前端无法直接使用mqtt
const MqttServer = new mosca.Server({
    port: 1883,
    http: {
        port: 1884,
        bundle: true,
        static: './'
    },
    user:'123456',
    password :'123456'
})
//对服务器端口进行配置， 在此端口进行监听
MqttServer.on('clientConnected', function(client) {
    //监听连接
    if(client.id === 'reality') {
      console.log('汉枫串口服务器连接成功.......');
    } else {
      console.log('本地mqtt连接成功.......');
    }
});

MqttServer.on('ready', function() {
    //当服务开启时
    console.log('Mosca server is running, waitting connent...');
});

module.exports = MqttServer