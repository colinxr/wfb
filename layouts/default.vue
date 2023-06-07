<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import LazySlideOut from '@/components/LazySlideOut.vue'
</script>

<template>
	<AppHeader />
	<slot />
	<LazySlideOut />
	<AppFooter />
</template>
