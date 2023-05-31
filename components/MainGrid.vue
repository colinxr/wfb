<template>
  <div :class="['xs-text-6 md-text-5 wfb-grid', { paginated: hasPagination }]">
    <div v-if="posts.length" class="r full-height browse">
      <div v-for="(post, i) in posts" :key="i" class="xs-border xs-border-top-none xs-border-left-none xs-p2 bcg-item"
        :style="`transition-delay:0.${i * 0.5}s`">
        <div class="item xs-block xs-full-height xs-flex">
          <nuxt-link
            class="xs-text-center xs-flex xs-full-height xs-flex-align-center xs-flex-justify-center xs-text-center"
            :to="post.path">
            {{ post.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-else class="r full-height browse">
      <div class="xs-p2 c-100 xs-flex xs-flex-align-center xs-flex-justify-center xs-text-center">
        <div v-if="posts.length < 1 && !busy">
          No Results.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import useMainStore from "~/store/main";

// const store = useMainStore();

const props = defineProps({
  posts: Array,
})

const tk = 'test'

const hasPagination = computed(() => false)
</script>

<style>
.wfb-grid .bcg-item {
  opacity: 0;
  transition: 0.2s opacity ease-out;
}

.wfb-grid .intersected.bcg-item {
  opacity: 1;
  transition: 0.2s opacity ease-out;
}
</style>
