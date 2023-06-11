<script setup>
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue'
</script>

<template>
	<header class="fixed bg-white top-0 left-0 right-0 z-999">
		<nav id="navbar" ref="navBar" class="border-b border-gray-300">
			<div class="md:w-1/3 border-r border-gray-300 p-2">
				<div class="item">
					<NuxtLink
						class="text-black font-inter uppercase no-underline font-extrabold text-[20px]"
						to="/"
						exact
					>
						Working From Bed
					</NuxtLink>
				</div>
			</div>
		</nav>

		<AppBreadcrumbs />
	</header>
</template>
