<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="80px" @submit.native.prevent="save">

      <el-form-item label="名称" prop="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="称号" prop="title">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="categories">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item of categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="难度" prop="difficult">
        <el-rate v-model="model.scores.difficult" :max="9"></el-rate>
      </el-form-item>
      <el-form-item label="技能" prop="skills">
        <el-rate v-model="model.scores.skills" :max="9"></el-rate>
      </el-form-item>
      <el-form-item label="攻击" prop="attack">
        <el-rate v-model="model.scores.attack" :max="9"></el-rate>
      </el-form-item>
      <el-form-item label="生存" prop="survive">
        <el-rate v-model="model.scores.survive" :max="9"></el-rate>
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
  avatar: '',
  title: '',
  categories: [],
  scores: {
    difficult: 0,
    skills: 0,
    attack: 0,
    survive: 0
  },
  skills: [{
    icon: '',
    name: '',
    description: '',
    tips: ''
  }],
  items1: [],
  items2: [],
  usageTips: '',
  battleTips: '',
  teamTips: '',
  partners: [{
    hero: '',
    description: ''
  }]
})

const categories = ref([])

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
  model.value = Object.assign({}, model.value, res.data)  // 合并数据
}

//获取英雄分类
const fetchCategories = async () => {
  const res = await proxy.$http.get('rest/categories')
  categories.value = res.data
}

onMounted(() => {
  props.id && fetch()  // 获取分类数据
  fetchCategories()  // 获取英雄分类
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