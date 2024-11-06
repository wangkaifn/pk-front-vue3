<template>
  <div>
    <Swiper :items="items" height="h-120" @change="onSlideChange"></Swiper>
  </div>
</template>

<script setup lang="ts">
import bg from '@/assets/images/bg.png'
import type { SwiperItemType } from '@/components/types'
import type Swiper from 'swiper'
const items: SwiperItemType[] = [
  { image: bg, title: '传播技术种子', subTitle: '让技术种子发芽' },
  { image: bg },
  { image: bg },
]

const onSlideChange = (e: Swiper) => {
  console.log('slide change', e)
}
</script>

<style scoped></style>

<route lang="yaml">
meta:
layout: default
</route>
