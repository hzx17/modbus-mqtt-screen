
// mqtt数据推送
const published=require('./mqtt/pulished.js')
//引入express
const express=require('express')

//引入
const Joi = require('joi')
//创建web服务器实例
const app=express()
//引入cors
const cors=require('cors')
// 导入配置文件
const config = require('./config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')

// //将内置中间件express.urlencoded注册，配置解析 application/x-www-form-urlencoded 格式的表单数据
// app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// 解析body参数
// const parser = require('body-parser')
// app.use(parser)

//将cors注册为全局中间件
app.use(cors())

// 响应数据的中间件
app.use(function (req, res, next) { 
   // status=0为成功；status=1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {   
    res.send({     
      // 状态 
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串    
      msg: err instanceof Error ? err.message : err,  
    })
  } 
  next()
})

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecrekey}).unless({ path: [/^\/api\//,/^\/my\//] }))

// 导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

//导入并使用用户信息的路由模块
const userinfoRouter=require('./router/datainfo')
app.use('/my',userinfoRouter)

//定义错误级别中间件
app.use((err,req,res,next)=>{
  if(err instanceof Joi.ValidationError){
    return res.cc(err)
  }
  // 捕获身份认证失败的错误 
  if (err.name === 'UnauthorizedError'){ 
    return res.cc('身份认证失败！')
  }
  //未知的错误
  res.cc(err)
})

app.listen(9000,()=>{
  console.log('http服务器启动成功http://127.0.0.1:9000')
})
