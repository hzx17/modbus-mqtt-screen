<template>
  <div class="register-form">
    <el-form :model="registerForm" :rules="registerFormRules" ref="registerForm">
      <el-form-item prop="username">
        <el-input
          v-model="registerForm.username"
          prefix-icon="el-icon-user"
          placeholder="账号"
          clearable
          autofocus
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="registerForm.password"
          prefix-icon="el-icon-lock"
          placeholder="密码"
          type="password"
          show-password
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item class="register_options">
        <el-button @click="resetRegisterForm">取消</el-button>
        <el-button type="primary" @click="submitRegisterForm">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      registerForm: {
        username: '',
        password: ''
      },
      registerFormRules: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' },
          {
            pattern: /^(hezhixing|(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|177|178)\d{8})$/,
            message: '请输入正确的手机号码!'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur'
          },
          {
            pattern: /^[\S]{6,15}$/,
            message:
              '请输入6-15位密码'
          }
        ]
      }
    }
  },
  created () {},
  methods: {
    submitRegisterForm () {
      this.$refs.registerForm.validate(async (valid) => {
        if (!valid) return
        const data = await this.$http.post('/api/reguser', JSON.stringify(this.registerForm))
        console.log(data)
        if (data.status !== 200) return this.$message.error('注册失败!')
        if (!data.data.success) return this.$message.error(data.data.msg)
        this.$message.success(data.data.msg)
        this.resetRegisterForm()
      })
    },
    resetRegisterForm () {
      this.$emit('closeDialog')
      this.$refs.registerForm.resetFields()
    }
  }
}
</script>
<style lang='less' scoped>
.register-form{
  .register_options /deep/ .el-form-item__content{
    display: flex;
    justify-content: center;
  }
}
</style>
