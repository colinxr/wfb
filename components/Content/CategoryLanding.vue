<script setup>
import BlogGrid from '@/components/Grid/BlogGrid.vue'

const props = defineProps({
	contentType: {
		type: String,
		required: true,
		validator: value => ['posts', 'pages', 'newsletters'].includes(value),
	},
})

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const { data: entries } = await useAsyncData('posts', () =>
	queryContent(props.contentType).only(['title', 'slug', '_path']).find()
)

useSeoMeta({
	title: `${capitalize(props.contentType)} >> WFB | Working From Bed`,
	ogTitle: `${capitalize(props.contentType)} >> WFB | Working From Bed`,
})
</script>

<template>
	<div class="mt-[83px]">
		<BlogGrid :entries="entries" />

		<GridPagination />
	</div>
</template>
