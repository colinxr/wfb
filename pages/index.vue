<script setup>
import BlogGrid from '@/components/Grid/BlogGrid.vue'

const { data: pages } = await useAsyncData('pages', () =>
	queryContent('pages').only(['title', 'slug', '_path']).find()
)

const { data: posts } = await useAsyncData('posts', () =>
	queryContent('posts').only(['title', 'slug', '_path']).find()
)

const entries = computed(() => [
	{ title: 'Strategy', attribute: 'static' },
	{ title: 'Development', attribute: 'static' },
	{ title: 'Design', attribute: 'static' },
	...pages.value,
	...posts.value,
])

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
	title: 'WFB | Working From Bed',
	ogTitle: 'WFB | Working From Bed',
	description:
		'Digital Agency and Product Lab, based in Toronto and Los Angeles',
	ogDescription:
		'Digital Agency and Product Lab, based in Toronto and Los Angeles',
	ogImage: 'https://example.com/image.png',
	twitterCard: 'summary_large_image',
})
</script>

<template>
	<div class="mt-[83px]">
		<BlogGrid :entries="entries" />

		<GridPagination />
	</div>
</template>
