<template>
  <div class="flex bg-gray-5">
    <router-link to="/" class="item">主页</router-link>
    <a
      href="http://www.baidu.com"
      class="item"
      target="_blank"
      rel="noopener noreferrer"
      >社区</a
    >
    <router-link to="/study" class="item">学习</router-link>
    <router-link to="/about" class="item">关于</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.item {
  @apply text-white text-xl font-200 py-2 px-8 cursor-pointer transition-all duration-300 relative;
  &:hover {
    @apply font-400;
    &::after {
      content: '';
      @apply absolute bg-gray-100 w-8 h-[2px] bottom-0;
      left: calc(50% - 1rem);
    }
  }
}
</style>
