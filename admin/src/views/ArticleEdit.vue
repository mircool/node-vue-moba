<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}文章</h1>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="所属分类" prop="parent">
        <el-select v-model="model.categories" multiple>
          <el-option
              v-for="item in categories"
              :key="item._id"
              :label="item.name"
              :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" prop="name">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="body">
        <el-input type="textarea" v-model="model.body"></el-input>
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
  title: '',
  body: '',
})

const categories = ref([])

const {proxy} = getCurrentInstance()  // 获取当前组件实例

const save = async () => {
  if (props.id) {
    await proxy.$http.put(`rest/articles/${props.id}`, model.value)
  } else {
    await proxy.$http.post('rest/articles', model.value)
  }
  proxy.$router.push('/articles/list')
  proxy.$message.success("保存成功")
}

// 获取数据
const fetch = async () => {
  const res = await proxy.$http.get(`rest/articles/${props.id}`)
  model.value = res.data
}

// 获取分类数据
const fetchCategories = async () => {
  const res = await proxy.$http.get('rest/categories')
  categories.value = res.data
}

onMounted(() => {
  fetchCategories()  // 获取分类数据
  props.id && fetch()  // 获取分类数据
})
</script>

<style scoped>

</style>