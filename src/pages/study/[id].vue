<template>
  <div>id: {{ route.id }}</div>
</template>

<script setup lang="ts">
import { useParams } from '@/hooks'
type Parmas = {
  id: string
}
const route = useParams<Parmas>()
</script>

<style scoped></style>
