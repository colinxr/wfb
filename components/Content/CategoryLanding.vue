<script setup>
import BlogGrid from '@/components/Grid/BlogGrid.vue'

const props = defineProps({
	contentType: {
		type: String,
		required: true,
		validator: value => ['posts', 'pages', 'newsletters'].includes(value),
	},
})

const { data: entries } = await useAsyncData('posts', () =>
	queryContent(props.contentType).only(['title', 'slug', '_path']).find()
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
	title: `${props.contentType} >> WFB | Working From Bed`,
	ogTitle: `${props.contentType} >> WFB | Working From Bed`,
})
</script>

<template>
	<div class="mt-[83px]">
		<BlogGrid :entries="entries" />

		<GridPagination />
	</div>
</template>
