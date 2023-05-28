//导入express
const express=require('express')
//创建路由对象
const router=express.Router()

// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
//导入schema验证
const schema=require('../schema/user')
//导入路由处理模块
const datainfo_handler=require('../router_handler/datainfo')

//挂载路由,获取用水基本信息
router.get('/waterinfo',datainfo_handler.getWaterInfo)
// 挂载路由,获取用电基本信息
router.get('/powerinfo',datainfo_handler.getPowerInfo)
// 挂载路由,获取告警基本信息
router.get('/wrapperinfo',datainfo_handler.getWrapperInfo)
// 挂载路由,获取实时报表
router.get('/getValue',datainfo_handler.getValue)

// //更新用户密码
// router.post('/updatepwd',expressJoi(schema.update_password_schema),datainfo_handler.updatepwd)

// // 更新用户头像的路由
// router.post('/update/avatar',expressJoi(schema.update_avatar_schema), datainfo_handler.updateAvatar)
module.exports=router