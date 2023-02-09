<template>
  <card :title="title" :icon="icon">
    <div class="nav jc-between">
      <div class="nav-item" :class="{active:false}">
        <div class="nav-link">热门</div>
      </div>
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
  </card>
</template>

<script setup>
import Card from "./Card.vue";
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
  },
  categories: {
    type: Array,
    required: true
  }
})

</script>

<style scoped>

</style>