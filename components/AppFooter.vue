<script setup>
const signupBoolean = computed(() => true)

const siteDescription = computed(() => 'copy goes here')

const year = ref(new Date().getFullYear())
</script>

<template>
	<footer class="bg-gray-100">
		<div class="md:flex no-gap">
			<div class="w-full md:w-1/3 p-5 border-b border-r border-gray-300">
				<div class="item">Smart, Thoughtful and Stylish.</div>
			</div>

			<div class="w-full md:w-1/3 p-5 border-b border-r border-gray-300">
				<div class="item">
					<ul class="list-unstyled">
						<li class="mb-2">
							<a
								class="text-blue-700 decoration-blue-700 underline underline-offset-1"
								href="mailto:contact@workingfrombed.org"
								target="_blank"
								>contact@workingfrombed.org</a
							>
						</li>
						<li class="mb-2">
							TW:
							<a
								class="text-blue-700 decoration-blue-700 underline underline-offset-1"
								href="https://twitter.com/workingfrombed"
								target="_blank"
								>@workingfrombed</a
							>
						</li>
						<li class="mb-2">
							IG:
							<a
								class="text-blue-700 decoration-blue-700 underline underline-offset-1"
								href="https://instagram.com/workingfrombedzzz"
								target="_blank"
								>@workingfrombedzzz</a
							>
						</li>
					</ul>
				</div>
			</div>

			<div class="w-full md:w-1/3 p-5 border-b border-r border-gray-300">
				<div class="item">
					<!-- <div class="footer__heading xs-mb2">Deploy</div> -->
					&copy; Working From Bed, {{ year }}
				</div>
			</div>
		</div>
	</footer>
</template>

<style>
.text-input {
	max-width: 100%;
}

.small-txt {
	font-size: 80%;
}

footer .item:hover .footer__heading {
	color: rgba(119, 119, 119, 0.6);
	transition: 0.2s color ease-in-out;
}

.footer__heading {
	max-width: 100%;
	pointer-events: none;
	color: rgba(119, 119, 119, 0.4);
	font-weight: 800;
	font-size: 85%;
	transition: 0.1s color ease-in-out;
}

.pagination__button--disabled {
	pointer-events: none;
}
</style>
