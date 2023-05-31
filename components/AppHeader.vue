<template>
  <header class="fixed bg-white top-0 left-0 right-0 z-999">
    <nav id="navbar" ref="navBar" class="border-b border-gray-300 ">
      <div class="flex">
        <div class="w-1/3 border-r border-gray-300 p-2">
          <div class="item">
            <nuxt-link class="sitename" to="/" exact>
              Working From Bed
            </nuxt-link>
          </div>
        </div>

        <div class="w-1/3 p-2 border-r border-gray-300">
          <div class="item xs-flex">
            <!-- <lazy-wfb-search /> -->
            search
          </div>
        </div>
      </div>
    </nav>

    <div class="border-b border-gray-300 p-2 text-xs">
      <!-- <ContentRenderer :value="" /> -->
      <span v-if="data">
        {{ data.tagline }}
      </span>
      <span v-else>fucking fuck</span>
    </div>
  </header>
</template>

<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').findOne())

console.log(data)
</script>

<style>
.titlebar .item {
  overflow-x: none;
}

.results {
  padding-left: 0;
  transform: translateY(17px);
  width: 30vw;
}

.results li {
  list-style-type: none;
  margin-left: 0;
}

.sitename {
  color: #000;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 18px;
}

@media only screen and (max-width: 40rem) {
  .results {
    width: 94vw;
  }
}
</style>
