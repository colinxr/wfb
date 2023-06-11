<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
a {
	@apply text-blue-700 decoration-blue-700 underline underline-offset-1;
}

.slide-left-enter,
.slide-right-leave-active {
	transform: translate(50%, 0);
	opacity: 0;
	transition: all 0.15s;
}

.slide-left-leave-active,
.slide-right-enter {
	transform: translate(-50%, 0);
	opacity: 0;
	transition: all 0.15s;
}

.slide-down-enter,
.slide-up-leave-active {
	transform: translate(0, 50%);
	opacity: 1;
	transition: all 0.15s;
}

.slide-down-leave-active,
.slide-up-enter {
	transform: translate(0, -50%);
	opacity: 1;
	transition: all 0.15s;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
	transition-delay: 0.3s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
