<template>
  <div>
    <h1>物品列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"/>
      <el-table-column prop="name" label="英雄名称"/>
      <el-table-column prop="title" label="英雄称号"/>
      <el-table-column prop="icon" label="头像">
        <template #default="scope">
          <img :src="scope.row.avatar" style="width: 50px; height: 50px;" alt="scope.row.name"/>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small"
                     @click="$router.push(`/heroes/edit/${scope.row._id}`)"
          >编辑
          </el-button>
          <el-button link type="danger" size="small"
                     @click="remove(scope.row)"
          > 删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import {getCurrentInstance, onMounted, ref} from "vue";

const {proxy} = getCurrentInstance()  // 获取当前组件实例

const items = ref([])

const fetch = async () => {
  const res = await proxy.$http.get('rest/heroes')
  items.value = res.data
}

onMounted(() => {
  fetch() // 获取数据
})

const remove = async (row) => {
  proxy.$confirm(`此操作将永久删除 "${row.name}" , 是否继续?`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    await proxy.$http.delete(`rest/heroes/${row._id}`)  // 删除数据
    proxy.$message.success('删除成功')
    await fetch() // 重新获取数据
  })
}
</script>

<style scoped>

</style>