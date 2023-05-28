/* 
     在此自定义模块中创建数据库连接的对象
*/
//导入mysql模块
const mysql=require('mysql')

//创建连接池
const db=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  password:'123456',
  user:'root',
  database:'node_test'
})

//向外暴露连接池
module.exports=db