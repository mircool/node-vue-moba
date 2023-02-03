<template>
  <div>
    <swiper :modules="modules" :pagination="{ clickable: true }">
      <swiper-slide><img class="w-100" src="../assets/images/1e42ea88e7ac829acc41669d56acaca2.jpeg"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/25eef8c0fd73d190de7ea916fe104d3b.jpeg"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/03899df187197f7f03c8a36ae57febf7.jpeg"></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import SwiperClass, {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
// more module style...
const modules = [Pagination]

</script>
