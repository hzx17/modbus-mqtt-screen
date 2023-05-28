/* 
    在这里定义用户相关路由处理函数，向外暴露供/router/user.js使用
*/
const db=require('../db/index')
//引入bcrpt,以便对密码进行加密
const bcrypt = require('bcryptjs')
//引入jwt
const jwt=require('jsonwebtoken')
//引入全局配置文件
const config=require('../config')

//注册新用户的处理函数
const reguser=(req, res) => { 
  const userinfo=req.body
  //这是服务端，前端和后端对用户输入都要进行合法性验证
  if(!userinfo.username || !userinfo.password){
    return res.cc('输入的用户名或密码为空')
  }
  /* 
  检测用户是否被占用
  */
  //定义Sql语句
  const sqlStr='select * from ev_users where username=?'
  //查询数据库
  db.query(sqlStr,userinfo.username,(err,results)=>{
   if(err){
     return res.cc(err)
    // return res.send({status:1,msg:'数据库连接失败'+err.message})
   }
   if(results.length>0){
     return res.cc('用户名已占用，请重新输入')
   }
   // 对用户的密码,进行 bcrype加密，返回值是加密之后的密码字符串
   userinfo.password=bcrypt.hashSync(userinfo.password,10)
    /* 
       插入数据
    */
   //定义插入数据库sql语句
   sqlinStr='insert into ev_users set ?'
   //执行插入数据库
   db.query(sqlinStr,{username:userinfo.username,password:userinfo.password},(err,results)=>{
     if(err){
       return res.cc(err)
      //  return res.send({stutas:1,msg:err.message})
     }
     if(results.affectedRows !==1){
       return res.cc('注册失败，稍后再试')
     }
      res.send({stutas:0,msg:'注册成功',success:true})
   })
  })
}

//登录
const login=(req, res) => { 
  //接收用户查询数据
  const userinfo=req.body
  //定义sql语句
  const sqlStr='select * from ev_users where username=?'
  //数据库查询
  db.query(sqlStr,userinfo.username,(err,results)=>{
    if(err){
      return res.cc(err)
    }
    if(results.length !==1){
      return res.cc('没有该用户，登录失败')
    }
      //比较数据库中的密码与输入的密码
    const compareResult=bcrypt.compareSync(userinfo.password, results[0].password)
    if(!compareResult){
      return  res.cc('密码错误，登录失败')
    }
    //登录成功，生成token，剔除密码及头像
    const user = { ...results[0], password: '', user_pic: '' }
    //生成token
    const tokenStr=jwt.sign(user,config.jwtSecrekey)
    res.send({
      status:0,
      msg:'登录成功',
      success: true,
      token:'Bearer '+tokenStr
    })
  })

}

module.exports={
  reguser,
  login
}