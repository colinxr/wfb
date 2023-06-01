<template>
  <div class="mt-[83px] h-screen">
    <BlogGrid :posts="posts" />
  </div>
</template>

<script setup>
import BlogGrid from '@/components/Grid/BlogGrid.vue'
import PagesGrid from '@/components/Grid/PagesGrid.vue';

const { data } = await useAsyncData('posts', () => queryContent('posts').only(['title']).find())

console.log(data)
</script>
