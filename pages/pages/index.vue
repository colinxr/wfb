<script setup>
import BlogGrid from '@/components/Grid/BlogGrid.vue'

const { data: entries } = await useAsyncData('pages', () =>
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

useSeoMeta({
	title: `Pages >> WFB | Working From Bed`,
	ogTitle: `Pages >> WFB | Working From Bed`,
})
</script>

<template>
	<div class="mt-[83px]">
		<BlogGrid :entries="entries" />

		<GridPagination />
	</div>
</template>
