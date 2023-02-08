<template>
  <div>
    <swiper :modules="modules"
            :pagination="{ clickable: true ,dynamicBullets: true} "
            :autoplay="{delay: 2500, disableOnInteraction: false}"
    >
      <swiper-slide><img class="w-100" src="../assets/images/03899df187197f7f03c8a36ae57febf7.jpeg"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/25eef8c0fd73d190de7ea916fe104d3b.jpeg"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/1e42ea88e7ac829acc41669d56acaca2.jpeg"></swiper-slide>
    </swiper>
    <!--    end of swiper-->
    <div class="nav-icons bg-white mt-3  text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!--    end of nav-icons-->
    <card title="新闻资讯" icon="menu">
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
    </card>
    <card title="英雄列表">
    </card>
    <card title="英雄列表">
    </card>
  </div>
</template>

<script setup>
import SwiperClass, {Pagination, Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import {Bill, More} from '@icon-park/vue-next';
import Card from "../components/Card.vue";

const modules = [Pagination, Autoplay]

</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;

  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;

    &:nth-child(4n+1) {
      border-left: none;
    }
  }
}
</style>