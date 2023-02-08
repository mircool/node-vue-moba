<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-head d-flex ai-center">
      <i :class="`iconfont icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{ title }}</div>
      <i class="iconfont icon-gengduo"></i>
    </div>
    <div class="card-body pt-3">
      <div class="nav jc-between">
        <div class="nav-item active">热门</div>
        <div class="nav-item">新闻</div>
        <div class="nav-item">公告</div>
        <div class="nav-item">活动</div>
        <div class="nav-item">赛事</div>
      </div>
      <div class="mt-2">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[新闻]</span>
              <span>|</span>
              <span>2月2日全服不停机更新公告</span>
              <span>02/01</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import SwiperClass, {Pagination, Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>