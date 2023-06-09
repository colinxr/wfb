<script setup>
// build breadcrumbs
// watch route
// get

const { data } = await useAsyncData('home', () =>
	queryContent('/').only('tagline').findOne()
)
</script>

<template>
	<header class="fixed bg-white top-0 left-0 right-0 z-999">
		<nav id="navbar" ref="navBar" class="border-b border-gray-300">
			<div class="md:w-1/3 border-r border-gray-300 p-2">
				<div class="item">
					<nuxt-link
						class="text-black tk font-inter uppercase font-extrabold text-[20px]"
						to="/"
						exact
					>
						Working From Bed
					</nuxt-link>
				</div>
			</div>
		</nav>

		<div class="border-b border-gray-300 p-2 text-xs">
			<span> {{ data.tagline }} </span>
		</div>
	</header>
</template>
