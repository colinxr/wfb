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
		<ul class="md:w-1/3">
			<NuxtLink to="/newsletters/july-1-seo-robot-hell">
				<li>
					<h2>A Storefront for the Robots: What We're Reading This Month</h2>
					<span
						>The SEO arms race has left Google and the web drowning in garbage
						text, with customers and businesses flailing to find each
						other.</span
					>
				</li>
			</NuxtLink>

			<NuxtLink to="/posts/why-wfb">
				<li>
					<h2>Why Work From Bed</h2>
					<span>"I can’t think unless I’m lying down." — Truman Capote</span>
				</li>
			</NuxtLink>

			<a href="https://workingfrombed.substack.com/" target="_blank">
				<li>
					<h2>WFB on Substack</h2>
					<span>Sign up for the Monthly-ish emails. No spam just love. </span>
				</li>
			</a>

			<NuxtLink to="/">
				<li>
					<h2>Go Home</h2>
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
