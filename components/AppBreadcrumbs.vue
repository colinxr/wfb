<script setup>
const route = useRoute()
const { pageTitle } = usePagination()

const { data } = await useAsyncData('home', () =>
	queryContent('/').only('tagline').findOne()
)
const parentName = ref(null)

const breadCrumbStyle = computed(() => {
	if (route.name === 'index') return 'home'

	if (!route.name.includes('-slug')) return 'landing-page'

	return 'entry'
})

onMounted(() => {
	parentName.value = route.name.replace('-slug', '')
})

watch(breadCrumbStyle, newValue => {
	if (newValue !== 'entry') return null

	parentName.value = route.name.replace('-slug', '')
})
</script>

<template>
	<div class="border-b border-gray-300 p-2 text-xs">
		<span v-if="breadCrumbStyle === 'home' && data">{{ data.tagline }}</span>

		<template v-if="breadCrumbStyle === 'landing-page'">
			<NuxtLink to="/">Home</NuxtLink> /
			<span class="titlecase capitalize">{{ route.name }}</span>
		</template>

		<template v-if="breadCrumbStyle === 'entry'">
			<NuxtLink to="/">Home</NuxtLink> /
			<NuxtLink class="capitalize" :to="`/${parentName}`">{{
				parentName
			}}</NuxtLink>
			/ <span>{{ pageTitle }}</span>
		</template>
	</div>
</template>
