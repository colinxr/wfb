<script setup>
const signupBoolean = computed(() => true)

const siteDescription = computed(() => 'copy goes here')
</script>

<template>
	<footer class="bg-gray-100 py-10">
		<div class="flex no-gap">
			<!-- <div v-if="pagination.active" class="c-12 xs-text-left xs-p2">
        <lazy-wfb-pagination :pagination="pagination" />
      </div> -->

			<div class="w-1/4 px-2 border-b border-r border-gray-300">
				<div class="item">
					<div v-if="siteDescription" class="footer__heading xs-mb2">About</div>
					<p v-if="siteDescription">
						{{ siteDescription }}
					</p>
				</div>
			</div>

			<div class="w-1/4 px-2 border-b border-r border-gray-300">
				<div class="footer__heading xs-mb2">email</div>
				<!-- <lazy-send-grid /> -->
				test
			</div>

			<div class="w-1/4 px-2 border-b border-r border-gray-300">
				<div class="item">
					<div class="footer__heading xs-mb2">Connect</div>
					<!-- <ul v-if="connectData" class="list-unstyled">
            <li v-for="(c, i) in connectData" :key="i">
              <a :href="c.url">{{ c.name }}</a>
            </li>
          </ul> -->
				</div>
			</div>

			<div class="w-1/4 px-2 border-b border-r border-gray-300">
				<div class="item">
					<div class="footer__heading xs-mb2">Deploy</div>
					deploy
					<!-- <a
            href="https://app.netlify.com/start/deploy?repository=https://github.com/jake-101/wfb-template"
          >
            <img
              style="height:29px;width:auto;"
              src="~/assets/deploy.svg"
              title="Deploy to Netlify"
            />
          </a> -->
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
