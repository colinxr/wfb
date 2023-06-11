<template>
	<div
		class="p-2 border-l-0 border-t-0 border border-grey-300 flex justify-center items-center"
		:style="`transition-delay:0.${key * 0.5}s`"
	>
		<div class="">
			<span v-if="isStatic">
				{{ data.title }}
			</span>

			<NuxtLink
				v-else
				class="xs-text-center xs-flex xs-full-height xs-flex-align-center xs-flex-justify-center xs-text-center"
				:to="data._path"
			>
				{{ data.title }}
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	data: {
		type: Object,
		default: () => {},
	},
	key: Number,
})

const isStatic = computed(() => props.data.attribute === 'static')
</script>
