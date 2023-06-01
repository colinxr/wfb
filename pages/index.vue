<template>
  <div class="mt-[83px] h-screen">
    <BlogGrid :posts="data" />
  </div>
</template>

<script setup>
import BlogGrid from '@/components/Grid/BlogGrid.vue'

const { data } = await useAsyncData('posts', () => queryContent('posts').only(['title', 'slug']).find())

console.log(data)
</script>
