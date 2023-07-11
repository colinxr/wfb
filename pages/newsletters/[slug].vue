<script setup>
definePageMeta({
	pageTransition: { name: 'slide-left' },
	middleware(to, from) {
		if (+to.query.page > +from.query.page) {
			to.meta.pageTransition.name = 'slide-right'
			return
		}

		to.meta.pageTransition.name = 'slide-left'
	},
})
</script>

<template>
	<ContentSingle contentType="newsletters" />

	<div
		class="max-w-[780px] mx-5 md:ml-[60px] text-center lg:ml-[80px] md:mr-0 pb-[160px]"
	>
		<iframe
			src="https://workingfrombed.substack.com/embed"
			class="w-full"
			height="320"
			style="border: 1px solid #eee; background: white"
			frameborder="0"
			scrolling="no"
		></iframe>

		<h3>
			If you were into this, make sure to sign up on substack to get these right
			in your inbox
		</h3>
	</div>
</template>
