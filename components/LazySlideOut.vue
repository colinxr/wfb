<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const route = useRoute()
const isOpen = ref(false)
const target = ref(null)

const { data: pages } = await useAsyncData('pages', () =>
	queryContent('pages').only(['title', 'slug', '_path']).find()
)

watch(route, newValue => {
	if (newValue) isOpen.value = false
})

onClickOutside(target, event => (isOpen.value = false))
</script>

<template>
	<div
		class="wfb-slideout xs-border xs-text-6 md-text-5 z-50 border-l border-gray-300"
		:class="{ 'is-open': isOpen }"
		ref="target"
	>
		<div class="wfb-slideout-opener">
			<div
				class="hamburger hamburger--spin js-hamburger"
				:class="{ 'is-active': isOpen }"
				@click="isOpen = !isOpen"
			>
				<div class="hamburger-box">
					<div class="hamburger-inner" />
				</div>
			</div>
		</div>

		<ul class="wfb-slideout-menu list-unstyled">
			<li
				class="wfb-slideout-menu-item menu-logo h-[48px] border-b border-gray-300 flex items-center"
			>
				<NuxtLink to="/" exact class="no-underline">
					<h2
						class="text-black tk font-inter uppercase font-extrabold text-[14px]"
					>
						WFB
					</h2>
				</NuxtLink>
			</li>
			<li class="wfb-slideout-menu-item--small">
				<NuxtLink to="/pages">Pages</NuxtLink>
			</li>
			<li class="wfb-slideout-menu-item--small">
				<NuxtLink to="/posts">Posts</NuxtLink>
			</li>
			<li
				v-for="(p, i) in pages"
				:key="`pg-${i}`"
				class="wfb-slideout-menu-item--small"
			>
				<NuxtLink :to="p._path">
					{{ p.title }}
				</NuxtLink>
			</li>
			<!-- <li v-if="info.menu" class="xs-mt5 wfb-slideout-menu-item heading-font">Links</li>
        <li v-for="m in info.menu" :key="m.position" class="wfb-slideout-menu-item--small">
        <a :href="m.link">{{m.name}}</a>
      </li> -->
		</ul>
	</div>
</template>

<style lang="scss">
.heading-font {
	text-transform: uppercase;
	font-weight: 800;
	// border-top: 2px solid rgba(119, 119, 119, 0.4);
	color: rgba(119, 119, 119, 0.4);
	padding: 0.5rem 0.3rem;
	font-size: 85%;
}

.hamburger {
	padding: 15px 15px;
	display: inline-block;
	cursor: pointer;
	transition-property: opacity, filter;
	transition-duration: 0.15s;
	transition-timing-function: linear;
	font: inherit;
	color: inherit;
	text-transform: none;
	background-color: transparent;
	border: 0;
	margin: 0;
	overflow: visible;
}

.hamburger:hover {
	opacity: 0.7;
}

.hamburger-box {
	width: 40px;
	height: 24px;
	display: inline-block;
	position: relative;
}

.hamburger-inner {
	display: block;
	top: 50%;
	margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
	width: 40px;
	height: 4px;
	background-color: #000;
	border-radius: 4px;
	position: absolute;
	transition-property: transform;
	transition-duration: 0.15s;
	transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
	content: '';
	display: block;
}

.hamburger-inner::before {
	top: -10px;
}

.hamburger-inner::after {
	bottom: -10px;
}

.hamburger--spin .hamburger-inner {
	transition-duration: 0.22s;
	transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin .hamburger-inner::before {
	transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}

.hamburger--spin .hamburger-inner::after {
	transition: bottom 0.1s 0.25s ease-in,
		transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin.is-active .hamburger-inner {
	transform: rotate(225deg);
	transition-delay: 0.12s;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hamburger--spin.is-active .hamburger-inner::before {
	top: 0;
	opacity: 0;
	transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}

.hamburger--spin.is-active .hamburger-inner::after {
	bottom: 0;
	transform: rotate(-90deg);
	transition: bottom 0.1s ease-out,
		transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.wfb-slideout {
	position: fixed;
	right: 0;
	top: 0;
	width: auto;
	min-width: 180px;
	height: 100vh;
	z-index: 1000;
	background-color: #fff;
	transform: translate3D(100%, 0, 0);
	transition: transform 0.45s;

	&.is-open {
		transform: translate3D(0, 0, 0);
		transition: transform 0.25s;
	}
}

.wfb-slideout-opener {
	position: absolute;
	top: -4px;
	right: 100%;
	transform: scale(0.5);
	margin-right: 0px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	color: #000;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
}

.wfb-slideout-menu {
	font-weight: 600;
	transition: transform 0.6s ease(out-cubic);

	.menu-logo {
		padding: 0.5rem 0.3rem;
	}
}

.wfb-slideout-menu-item--small a {
	cursor: pointer;
	border-top: 1px solid #666;
	display: block;
	padding: 0.5rem 0.3rem;

	&:hover {
		background: var(--hover-bg);
	}

	&:focus,
	:active {
		background: var(--active-bg);
	}
}

.wfb-slideout-menu-item--small a:hover {
	text-decoration: none;
}
</style>
