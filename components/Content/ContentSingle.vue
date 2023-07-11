<script setup>
const route = useRoute()

const props = defineProps({
	contentType: {
		type: String,
		required: true,
		validator: value => ['posts', 'pages', 'newsletters'].includes(value),
	},
})

const { pageTitle } = usePagination()

const { data: entry } = await useAsyncData('entry', () =>
	queryContent(props.contentType).where({ slug: route.params.slug }).findOne()
)

onMounted(() => (pageTitle.value = entry.value.title))

// useSeoMeta({
// 	title: `${entry.value.title} >> WFB | Working From Bed`,
// 	ogTitle: `${entry.value.title} WFB | Working From Bed`,
// })
</script>

<template>
	<EntryLayout v-if="entry" :entry="entry" />
	<div v-else>404</div>
</template>
