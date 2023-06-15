<script setup>
definePageMeta({
	layout: 'minimal',
	layoutTransition: { name: 'slide-left' },
})
</script>

<template>
	<div
		class="mt-[63px] h-screen flex justify-center md:items-center pt-10 md:pt-0"
	>
		<ul class="md:max-w-1/3">
			<!-- <a href="https://workingfrombed.substack.com/">
				<li>
					<h2>Working From Bed Newsletter</h2>
					<span>Monthly-ish emails no spam just love. </span>
				</li>
			</a> -->
			<NuxtLink to="/posts/why-wfb">
				<li>
					<h2>Why Work From Bed</h2>
					<span>Why work from bed tk tk tkt</span>
				</li>
			</NuxtLink>

			<NuxtLink to="/">
				<li>
					<h2>home page</h2>
				</li>
			</NuxtLink>
		</ul>
	</div>
</template>

<style scoped>
li {
	@apply mb-5 text-center border border-gray-300 p-5 hover:bg-gray-200 hover:border-gray-500 cursor-pointer;
}
ul a {
	@apply no-underline text-gray-600;
}

li h2 {
	@apply underline underline-offset-1 text-blue-600;
}
</style>
