<template>
	<div class="h-screen">
		<div
			class="wfb-grid grid grid-cols-2 md:grid-cols-3 grid-cols-[repeat(3_1fr] h-full"
		>
			<GridItem v-for="(item, i) in entries" :key="i" :data="item" />
		</div>
	</div>
</template>

<script setup>
const { pagination } = usePagination()

onMounted(() => {
	pagination.active = props.entries.length > 2
	pagination.totalPages = Math.ceil(props.entries.length / 2)
})

const props = defineProps({
	entries: {
		type: Array,
		default: () => [],
	},
})
</script>
