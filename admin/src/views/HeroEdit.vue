<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="80px" @submit.native.prevent="save">

      <el-form-item label="名称" prop="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <el-upload
            class="avatar-uploader"
            :action="proxy.$http.defaults.baseURL + '/uploads'"
            :show-file-list="false"
            :on-success="afterUpload"
        >
          <img v-if="model.avatar" :src="model.avatar" class="avatar"/>
          <el-icon v-else class="avatar-uploader-icon">
            <Plus/>
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import {getCurrentInstance, onMounted, ref} from 'vue'
import {Plus} from '@element-plus/icons-vue'

const props = defineProps(['id'])

const model = ref({
  name: '',
  avatar: ''
})


const {proxy} = getCurrentInstance()  // 获取当前组件实例

const save = async () => {
  if (props.id) {
    await proxy.$http.put(`rest/heroes/${props.id}`, model.value)
  } else {
    await proxy.$http.post('rest/heroes', model.value)
  }
  proxy.$router.push('/heroes/list')
  proxy.$message.success("保存成功")
}

// 获取数据
const fetch = async () => {
  const res = await proxy.$http.get(`rest/heroes/${props.id}`)
  model.value = res.data
}

onMounted(() => {
  props.id && fetch()  // 获取分类数据
})

const afterUpload = (res) => {
  model.value.avatar = res.url
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  text-align: center;
}
</style>