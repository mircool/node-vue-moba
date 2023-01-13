<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}广告位</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="广告位名称" prop="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告" prop="code">
        <el-row>
          <el-col :span="24">
            <el-button type="text" @click="model.items.push({})" style="margin-bottom: 1rem">
              <el-icon>
                <Plus/>
              </el-icon>
              新增广告
            </el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :md="24" v-for="(item,index) in model.items" :key="index">
            <el-form-item label="图片">
              <el-upload
                  class="avatar-uploader"
                  :action="proxy.$http.defaults.baseURL + '/upload'"
                  :headers="proxy.$http.defaults.headers"
                  :show-file-list="false"
                  :on-success="res=>item.image=res.url"
              >
                <img v-if="item.image" :src="item.image" class="avatar" alt="item.name"/>
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus/>
                </el-icon>
              </el-upload>
            </el-form-item>
            <el-form-item label="跳转链接(URL)" style="margin-top: 0.5rem">
              <el-input type="text" v-model="item.url"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="danger" @click="model.items.splice(index,1)">删除</el-button>
            </el-form-item>
          </el-col>

        </el-row>
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

const props = defineProps(['id']) // 获取路由参数

const model = ref({
  name: '',
  items: []
})

const {proxy} = getCurrentInstance()  // 获取当前组件实例

const save = async () => {
  if (props.id) {
    await proxy.$http.put(`rest/ads/${props.id}`, model.value)
  } else {
    await proxy.$http.post('rest/ads', model.value)
  }
  proxy.$router.push('/ads/list')
  proxy.$message.success("保存成功")
}

// 获取数据
const fetch = async () => {
  const res = await proxy.$http.get(`rest/ads/${props.id}`)
  model.value = Object.assign(model.value, res.data)
}

onMounted(() => {
  props.id && fetch()  // 获取分类数据
})
</script>

<style scoped>

</style>

<style>
.el-form {
  margin-top: 1rem;
}
</style>