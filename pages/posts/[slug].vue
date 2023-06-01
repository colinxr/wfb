<template>
  <article
    class="h-full max-w-[800px] ml-[80px] my-0 pb-[160px] mt-[var(--nav-height)] min-h-[calc(85vh - var(--nav-height))]">
    <div class="item xs-block xs-full-height" a>
      <lazy-featured-image v-if="post.thumbnail" :title="post.title" :thumbnail="post.thumbnail" />

      <header class="mb-10">
        <h1 class="main-title">{{ post.title }}</h1>
        <span class="text-sm text-gray-600">{{ post.date }}</span>
      </header>

      <ContentRenderer :value="post" class="prose lg:prose-xl" />
    </div>
  </article>
</template>

<script setup>
const route = useRoute()

const { data: post } = await useAsyncData('posts', () => queryContent('posts').where({ 'slug': route.params.slug }).findOne())
</script>