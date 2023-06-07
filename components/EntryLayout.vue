<template>
  <article
    class="h-full max-w-[780px] mx-5 md:ml-[60px] lg:ml-[80px] md:mr-0 mt-[95px] md:mt-[65px] pb-[160px]"
  >
    <div class="item xs-block xs-full-height" a>
      <lazy-featured-image
        v-if="entry.thumbnail"
        :title="entry.title"
        :thumbnail="entry.thumbnail"
      />

      <header class="mb-10">
        <h1 class="main-title">{{ entry.title }}</h1>
        <span class="text-sm text-gray-600">{{ entry.date }}</span>
      </header>

      <ContentRenderer :value="entry" class="prose lg:prose-xl" />
    </div>
  </article>
</template>

<script setup>
  const props = defineProps({
    entry: {
      type: Object,
      required: true,
    },
  })
</script>
