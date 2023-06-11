<script setup>
const route = useRoute()
const { pageTitle } = usePagination()

const { data: entry } = await useAsyncData('page', () =>
	queryContent('pages').where({ slug: route.params.slug }).findOne()
)

onMounted(() => (pageTitle.value = entry.value.title))

definePageMeta({
	pageTransition: { name: 'slide-left' },
	middleware(to, from) {
		if (!from) {
			to.meta.pageTransition.name = 'fade'
			return
		}

		if (+to.query.page > +from.query.page) {
			to.meta.pageTransition.name = 'slide-right'
			return
		}

		to.meta.pageTransition.name = 'slide-left'
	},
})

useSeoMeta({
	title: `${entry.value.title} >> WFB | Working From Bed`,
	ogTitle: `${entry.value.title} WFB | Working From Bed`,
})
</script>

<template>
	<EntryLayout :entry="entry" />
</template>
