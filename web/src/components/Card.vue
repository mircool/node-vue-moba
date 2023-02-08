<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-head d-flex ai-center pb-3">
      <i :class="`iconfont icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{ title }}</div>
      <i class="iconfont icon-gengduo"></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
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

<style lang="scss">
@import '../assets/scss/variables.scss';
.card{
  border-radius: 5px;
  .card-head {
    border-bottom: 1px solid $border-color;
  }
  border-bottom: 1px solid $border-color;
}

</style>