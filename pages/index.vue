<script setup>
import BlogGrid from '@/components/Grid/BlogGrid.vue'

const route = useRoute()

const { data } = await useAsyncData('pages', () =>
	queryContent('pages').only(['title', 'slug', '_path']).find()
)

definePageMeta({
	pageTransition: { name: 'slide-left' },
	middleware(to, from) {
		if (+to.query.page > +from.query.page) {
			to.meta.pageTransition.name = 'slide-right'
			return
		}

		to.meta.pageTransition.name = 'slide-left'
	},
})
</script>

<template>
	<div class="mt-[83px]">
		<BlogGrid :entries="data" />

		<GridPagination />
	</div>
</template>
