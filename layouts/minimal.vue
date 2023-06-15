<script setup>
import AppHeader from '@/components/AppHeader.vue'
import LazySlideOut from '@/components/LazySlideOut.vue'
</script>

<template>
	<AppHeader :showCrumbs="false" />
	<slot />
	<LazySlideOut />
</template>
