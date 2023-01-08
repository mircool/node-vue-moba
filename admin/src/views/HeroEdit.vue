<template>
  <div style="width: 98%;margin: 0 auto">
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="80px" @submit.native.prevent="save" style="margin-top: 1rem">

      <el-tabs type="border-card" model-value="skills">
        <el-tab-pane label="基本信息">

          <el-form-item label="名称" prop="name">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号" prop="title">
            <el-input v-model="model.title"></el-input>
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

          <el-form-item label="顺风出装" prop="items1">
            <el-select v-model="model.items1" multiple>
              <el-option v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="逆风出装" prop="items1">
            <el-select v-model="model.items2" multiple>
              <el-option v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"/>
          </el-form-item>

          <el-form-item label="对战技巧">
            <el-input type="textarea" v-model="model.battleTips"/>
          </el-form-item>

          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"/>
          </el-form-item>
        </el-tab-pane>

        <el-tab-pane label="英雄技能" name="skills">
          <el-button type="text" @click="model.skills.push({})" style="margin-bottom: 1rem">
            <el-icon>
              <Plus/>
            </el-icon>
            新增技能
          </el-button>
          <el-row>
            <el-col :md="12" v-for="(item,index) in model.skills" :key="index">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                    class="avatar-uploader"
                    :action="proxy.$http.defaults.baseURL + '/uploads'"
                    :show-file-list="false"
                    :on-success="afterUpload"
                >
                  <img v-if="model.icon" :src="model.icon" class="avatar" alt="item.name"/>
                  <el-icon v-else class="avatar-uploader-icon">
                    <Plus/>
                  </el-icon>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
            </el-col>

          </el-row>
        </el-tab-pane>
      </el-tabs>


      <el-form-item style="margin-top: 1rem">
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
const items = ref([])

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

//获取装备列表
const fetchItems = async () => {
  const res = await proxy.$http.get('rest/items')
  items.value = res.data
}

onMounted(() => {
  props.id && fetch()  // 获取分类数据
  fetchCategories()  // 获取英雄分类
  fetchItems()  // 获取装备列表
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