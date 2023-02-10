<template>
  <div>
    <div class="top-bar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" alt="pvp" height="32" width="32">
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse pb-1 jc-around">
        <div class="nav-item active">
          <router-link to="/" class="nav-link text-white active">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/about" class="nav-link text-white">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/about" class="nav-link text-white">赛事中心</router-link>
        </div>

      </div>

    </div>
    <RouterView/>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.top-bar {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>