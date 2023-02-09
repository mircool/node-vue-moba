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
    <list-card title="新闻资讯" icon="menu" :categories="newsCats">

    </list-card>
    <card title="英雄列表" icon="menu">
    </card>
    <card title="精彩视频" icon="menu">
    </card>
    <card title="图文攻略" icon="menu">
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
import ListCard from "../components/ListCard.vue";
import {reactive} from "vue";

const modules = [Pagination, Autoplay]

const newsCats = reactive([
  {
    name: '热门',
    newsList: new Array(5).fill(true).map(v => ({
      categoryName: '公告',
      title: '2月2日全服不停机更新公告',
      date: '02/01'
    }))
  },
  {
    name: '新闻',
    newsList: new Array(5).fill(true).map(v => ({
      categoryName: '新闻',
      title: '2月2日全服不停机更新公告',
      date: '02/01'
    }))
  },
  {
    name: '公告',
    newsList: new Array(5).fill(true).map(v => ({
      categoryName: '公告',
      title: '2月2日全服不停机更新公告',
      date: '02/01'
    }))
  },
  {
    name: '活动',
    newsList: new Array(5).fill(true).map(v => ({
      categoryName: '活动',
      title: '2月2日全服不停机更新公告',
      date: '02/01'
    }))
  },
  {
    name: '赛事',
    newsList: new Array(5).fill(true).map(v => ({
      categoryName: '赛事',
      title: '2月2日全服不停机更新公告',
      date: '02/01'
    }))
  }
])

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