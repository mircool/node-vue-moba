<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}物品</h1>
    <el-form label-width="80px" @submit.native.prevent="save">

      <el-form-item label="名称" prop="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标" prop="ico">
        <el-upload
            class="avatar-uploader"
            :action="proxy.$http.defaults.baseURL + '/upload'"
            :headers="proxy.$http.defaults.headers"
            :show-file-list="false"
            :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar"/>
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
})

const parents = ref([])

const {proxy} = getCurrentInstance()  // 获取当前组件实例

const save = async () => {
  if (props.id) {
    await proxy.$http.put(`rest/items/${props.id}`, model.value)
  } else {
    await proxy.$http.post('rest/items', model.value)
  }
  proxy.$router.push('/items/list')
  proxy.$message.success("保存成功")
}

// 获取数据
const fetch = async () => {
  const res = await proxy.$http.get(`rest/items/${props.id}`)
  model.value = res.data
}

onMounted(() => {
  props.id && fetch()  // 获取分类数据
})

const afterUpload = (res) => {
  model.value.icon = res.url
}
</script>
