<template>
  <div class="wfb-grid grid grid-cols-3 grid-cols-[repeat(3_1fr] h-full ">
    <GridItem v-for="(item, i) in gridItems" :key="i" :data="item" />
  </div>
</template>

<script setup>
const gridItems = computed(() => {
  const pages = [
    { title: 'Strategy' },
    { title: 'Development' },
    { title: 'Design' },
  ]

  return [...pages, ...props.posts]
})

const props = defineProps({
  posts: {
    type: Array,
    default: () => []
  }
})
</script>
