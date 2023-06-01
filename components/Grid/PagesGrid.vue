<template>
  <GridWrapper>
    <GridItem v-for="(page, i) in pages" :key="i" :data="page" class="w-1/3" />
  </GridWrapper>
</template>

<script setup>

const pages = ref([
  { title: 'Strategy' },
  {
    title: 'Development'
  },
  { title: 'Design' },
])
</script>
