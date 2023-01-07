<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}分类</h1>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="上级分类" prop="parent">
        <el-select v-model="model.parent">
          <el-option
              v-for="item in parents"
              :key="item._id"
              :label="item.name"
              :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input v-model="model.name"></el-input>
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
  name: '',
})

const parents = ref([])

const {proxy} = getCurrentInstance()  // 获取当前组件实例

const save = async () => {
  if (props.id) {
    await proxy.$http.put(`categories/${props.id}`, model.value)
  } else {
    await proxy.$http.post('categories', model.value)
  }
  proxy.$router.push('/categories/list')
  proxy.$message.success("保存成功")
}

// 获取数据
const fetch = async () => {
  const res = await proxy.$http.get(`categories/${props.id}`)
  model.value = res.data
}

const fetchParents = async () => {
  const res = await proxy.$http.get('categories', {
    params: {
      per_page: 100
    }
  })
  parents.value = res.data
}

onMounted(() => {
  fetchParents()  // 获取父级分类
  props.id && fetch()  // 获取分类数据
})
</script>

<style scoped>

</style>