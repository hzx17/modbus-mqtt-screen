const express = require('express')
// 创建路由对象
const router = express.Router()

//导入路由的处理函数文件
const userHeadler=require('../router_handler/user')
// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
//导入schema验证
const {reg_login_schema}=require('../schema/user')
// 注册新用户
router.post('/reguser',expressJoi(reg_login_schema),userHeadler.reguser )
// 登录
router.post('/login',expressJoi(reg_login_schema),userHeadler.login )
// 将路由对象共享出去
module.exports = router