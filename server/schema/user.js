//导入验证规则的包
const joi=require('joi')

//定义用户名和密码验证规则
const username = joi.string().pattern(/^(hezhixing|(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|177|178)\d{8})$/).required()
const password = joi.string().pattern(/^[\S]{6,15}$/).required()

// 验证规则对象 - 重置密码
exports.update_password_schema = { 
   body: {   
     // 使用 password 这个规则，验证 req.body.oldPwd 的值   
     oldPwd: password,   
     newPwd: joi.not(joi.ref('oldPwd')).concat(password),
   },
}

// 注册和登录表单的验证规则对象
exports.reg_login_schema = {
  body: {
    username,
    password,
  },
}
