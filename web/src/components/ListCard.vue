<template>
  <card :title="title" :icon="icon">
    <div class="nav jc-between">
      <div class="nav-item"
           :class="{active:active===index}"
           v-for="(category,index) in categories"
           :key="index"
           @click="active=index">
        <div class="nav-link">{{ category.name }}</div>
      </div>
    </div>
    <div class="mt-2">
      <swiper ref="list" @slide-change="">
        <swiper-slide v-for="(category,index) in categories" :key="index">
          <slot name="items" :category="category"></slot>
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
import {ref} from "vue";

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

const active = ref(0)

</script>

<style scoped>

</style>