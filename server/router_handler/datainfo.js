//这是获取用户信息的处理函数

//导入数据库操作模块
const db=require('../db/index')
//引入bcrpt,以便对密码进行解密
const bcrypt = require('bcryptjs')
// 连接串口
const ModbusRTUClient = require('../mqtt/modbus-port.js');
// 时间
const moment = require('moment');
//查询用水基本信息
const getWaterInfo=(req,res)=>{
  //定义查询用水的SQL语句
  const sqlStr='SELECT * FROM water_use ORDER BY ID DESC LIMIT 5'
  db.query(sqlStr,(err,results)=>{
    if(err){
      return res.cc(err)
     // return res.send({status:1,msg:'数据库连接失败'+err.message})
    }
    const data = results
    let timeArr = []
    let amountArr = []
    for(let i =0 ; i<data.length; i++) {
      timeArr.unshift(data[i].time)
      amountArr.push({'time':data[i].time,'供水1区':data[i].amount1, '供水2区':data[i].amount2})
    }
    //获取用水信息成功
    res.send({
      status:0,
      msg:'获取成功',
      success:true,
      data: [timeArr,amountArr]
    })
  })
}
//查询用电基本信息
const getPowerInfo=(req,res)=>{
  //定义查询用电的SQL语句
  const sqlStr='SELECT * FROM power_use ORDER BY ID DESC LIMIT 5'
  db.query(sqlStr,(err,results)=>{
    if(err){
      return res.cc(err)
     // return res.send({status:1,msg:'数据库连接失败'+err.message})
    }
    const data = results
    let powerArr = []
    for(let i =0 ; i<data.length; i++) {
      powerArr.unshift({'time':data[i].time,'用电量':data[i].power_order})
    }
    //获取用户信息成功
    res.send({
      status:0,
      msg:'获取成功',
      success:true,
      data: powerArr
    })
  })
}
//查询告警基本信息
const getWrapperInfo=(req,res)=>{
  //定义查询用电的SQL语句
  const sqlStr='SELECT * FROM wrapper_table ORDER BY ID DESC LIMIT 10'
  db.query(sqlStr,(err,results)=>{
    if(err){
      return res.cc(err)
     // return res.send({status:1,msg:'数据库连接失败'+err.message})
    }
    const data = results
    let wrapperArr = []
    for(let i =0 ; i<data.length; i++) {
      wrapperArr.unshift([i,data[i].time,data[i].wrapper_info])
    }
    //获取用户信息成功
    res.send({
      status:0,
      msg:'获取成功',
      success:true,
      data: wrapperArr
    })
  })
}
//查询实时报表
const getValue=(req,res)=>{
  ModbusRTUClient.readHoldingRegisters(0, 12, function(err, data){
    let tempArr = []
    tempArr.push({
      time: moment().format("YYYY-MM-DD HH:mm:ss"), 
      voltmeter : `${data.data[0]}v`, 
      ele : `${data.data[1]}A`,
      data3 : `${data.data[2]}.`,
      data4 : `${data.data[3]}Mpa`,
      data5 : `${data.data[6]}℃`,
      waterTem : `${data.data[9]}℃`,
    })
    //获取用户信息成功
    res.send({
      status:0,
      msg:'获取成功',
      success:true,
      data: tempArr
    })
  })
}
// //修改用户信息
// const updateUserinfo=(req,res)=>{
//   //定义更新用户信息
//   const sql = `update ev_users set ? where id=?`
//   db.query(sql, [req.body, req.body.id], (err, results) => { 
//      // 执行 SQL 语句失败  
//     if (err) return res.cc(err)  
//     // 执行 SQL 语句成功，但影响行数不为 1 
//     if (results.affectedRows !== 1) return res.cc('修改用户基本信息失败！')  
//     // 修改用户信息成功 
//     return res.cc('修改用户基本信息成功！', 0)
//   })
// }
// //修改用户密码
// const updatepwd=(req,res)=>{
//   // 定义根据 id 查询用户数据的 SQL 语句
//   const sql = `select * from ev_users where id=?`
//   // 执行 SQL 语句查询用户是否存在
//   db.query(sql, req.user.id, (err, results) => { 
//     // 执行 SQL 语句失败  
//     if (err) return res.cc(err) 
//      // 检查指定 id 的用户是否存在  
//     if (results.length !== 1) return res.cc('用户不存在！')  
//     // TODO：判断提交的旧密码是否正确
//     //比较数据库中的密码与输入的密码
//     const compareResult=bcrypt.compareSync(req.body.oldPwd, results[0].password)
//     if(!compareResult){
//       return  res.cc('旧密码错误，修改失败')
//     }
//     // 定义更新用户密码的 SQL 语句
//     const sql = `update ev_users set password=? where id=?`
//     // 对新密码进行 bcrypt 加密处理
//     const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
//     // 执行 SQL 语句，根据 id 更新用户的密码
//     db.query(sql, [newPwd, req.user.id], (err, results) => { 
//       // SQL 语句执行失败  
//       if (err) return res.cc(err)  
//       // SQL 语句执行成功，但是影响行数不等于 1  
//       if (results.affectedRows !== 1) return res.cc('更新密码失败！')  
//       // 更新密码成功  
//       res.cc('更新密码成功！', 0)
//     })
//   })
// }

// //修改用户头像
// const updateAvatar=(req,res)=>{
//   //定义更新用户头像的 SQL 语句： 
//   const sql = 'update ev_users set user_pic=? where id=?'
//   db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
//     // 执行 SQL 语句失败   
//     if (err) return res.cc(err)  
//     // 执行 SQL 语句成功，但是影响行数不等于 1  
//     if (results.affectedRows !== 1) return res.cc('更新头像失败！')  
//     // 更新用户头像成功  
//     return res.cc('更新头像成功！', 0)
//   })
// }
module.exports={getWaterInfo,getPowerInfo,getWrapperInfo, getValue}