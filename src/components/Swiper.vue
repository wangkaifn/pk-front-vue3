<template>
  <swiper
    :slides-per-view="1"
    :space-between="0"
    :autoplay="true"
    :modules="[Navigation, Pagination, Autoplay]"
    :loop="true"
    :navigation="{
      prevEl: '.prev',
      nextEl: '.next',
    }"
    :pagination="{
      type: 'fraction',
      el: '.pagination',
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :style="getClassAndStyles(props.height).style"
    :class="getClassAndStyles(props.height).class"
    v-bind="$attrs"
    class="relative"
  >
    <swiper-slide v-for="item in items" :key="item.image">
      <slot :item="item">
        <div
          class="w-full h-full bg-cover bg-no-repeat bg-center-top"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <Container class="h-full">
            <div class="flex flex-col justify-center items-start">
              <p class="text-3xl font-bold text-white">{{ item.title }}</p>
              <p class="text-xl text-gray-100 pt-4">{{ item.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    <div
      class="flex items-center justify-center absolute right-0 bottom-0 bg-white opacity-60 text-dark-300 w-30 h-8 z-30"
      v-if="!$attrs.pagination_hide"
    >
      <div class="pagination w-unset! text-4 mr-4"></div>
      <div class="prev text-xl i-charm-arrow-left"></div>
      <div class="next text-xl i-charm-arrow-right"></div>
    </div>
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// import { register } from 'swiper/element/bundle'
// // register Swiper custom elements
// register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import type { SwiperItemType } from './types'
import Container from './Container.vue'

const props = defineProps({
  height: {
    type: String,
    default: 'h-80',
  },
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    dfault: () => [],
  },
})

const emits = defineEmits(['swiper', 'change'])

function getClassAndStyles(str: string) {
  return {
    style: /(rem|px|em)/.test(props.height) ? { height: str } : {},
    class: /h-/.test(props.height) ? str : '',
  }
}
const onSwiper = (swiper: SwiperType) => {
  emits('swiper', swiper)
}
const onSlideChange = (e: SwiperType) => {
  emits('change', e)
}
</script>

<style scoped lang="scss">
.swiper-button-disabled {
  color: rgba(#000, 0.2);
}
</style>
