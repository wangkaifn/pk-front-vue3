<template>
  <div
    class="fixed top-0 w-full"
    :class="{
      'bg-black bg-opacity-30 shadow-md': y > 0,
    }"
  >
    <Container>
      <img src="/public/512x512.png" class="w-14 h-full" />
      <Menu />
    </Container>
  </div>
  <div class="h-[2000px]"></div>
  <RouterView />
</template>

<script setup lang="ts">
const { y } = useWindowScroll()
</script>

<style scoped></style>
