<template>
  <header class="fixed bg-white top-0 left-0 right-0 z-999">
    <nav id="navbar" ref="navBar" class="border-b border-gray-300">
      <div class="flex">
        <div class="w-1/2 md:w-1/3 border-r border-gray-300 p-2">
          <div class="item">
            <nuxt-link
              class="text-black tk font-inter uppercase font-extrabold text-[20px]"
              to="/"
              exact
            >
              Working From Bed
            </nuxt-link>
          </div>
        </div>

        <div class="hidden md:block w-1/3 p-2 border-r border-gray-300">
          <div class="item font-light text-xs flex items-end">
            <!-- <lazy-wfb-search /> -->
            <span> Search </span>
          </div>
        </div>
      </div>
    </nav>

    <div class="border-b border-gray-300 p-2 text-xs">
      <span> {{ data.tagline }} </span>
    </div>
  </header>
</template>

<script setup>
  const { data } = await useAsyncData("home", () =>
    queryContent("/").only("tagline").findOne()
  )
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

  @media only screen and (max-width: 40rem) {
    .results {
      width: 94vw;
    }
  }
</style>
