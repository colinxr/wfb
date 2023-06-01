<template>
  <!-- <main class="container xs-text-5 md-text-4"> -->
  <AppHeader />
  <slot />
  <LazySlideOut />
  <AppFooter />
  <!-- </section> -->
</template>

<script setup>
// import useMainStore from '~/store/main'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import LazySlideOut from '@/components/LazySlideOut.vue'

// const store = useMainStore()
// console.log(store.menuIsActive);

// const email = ref('')

// onBeforeMount(() => {
//   store.actions.fetchInfo()
// })
</script>
