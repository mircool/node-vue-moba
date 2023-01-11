<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form label-position="top" @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>

</template>

<script setup>
import {getCurrentInstance, reactive} from "vue";
import {ElMessage} from "element-plus";

const {proxy} = getCurrentInstance()  // 获取当前组件实例

const model = reactive({
  username: '',
  password: ''
})

// 登录
const login = async () => {
  const res = await proxy.$http.post('admin/login', model)
  localStorage.token = res.data.token
  proxy.$router.push('/')
  ElMessage.success('登录成功')
}

</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-card {
  width: 25rem;
  margin: 5rem auto;
}
</style>