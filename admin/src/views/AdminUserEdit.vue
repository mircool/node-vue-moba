<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}管理员</h1>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import {getCurrentInstance, onMounted, ref} from 'vue'

const props = defineProps(['id'])

const model = ref({
  username: '',
  password: ''
})

const {proxy} = getCurrentInstance()  // 获取当前组件实例

const save = async () => {
  if (props.id) {
    await proxy.$http.put(`rest/admin_users/${props.id}`, model.value)
  } else {
    await proxy.$http.post('rest/admin_users', model.value)
  }
  proxy.$router.push('/admin_users/list')
  proxy.$message.success("保存成功")
}

// 获取数据
const fetch = async () => {
  const res = await proxy.$http.get(`rest/admin_users/${props.id}`)
  model.value = res.data
}


onMounted(() => {
  props.id && fetch()  // 获取分类数据
})
</script>

<style scoped>

</style>