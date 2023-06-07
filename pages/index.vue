<template>
  <div class="mt-[83px] h-screen">
    <BlogGrid :entries="data" />
  </div>
</template>

<script setup>
  import BlogGrid from "@/components/Grid/BlogGrid.vue"

  const route = useRoute()

  const { data } = await useAsyncData("pages", () =>
    queryContent("pages").only(["title", "slug", "_path"]).find()
  )

  // const transition = ref("fade")

  // onBeforeMount(() => {
  //   if (!route.from) return

  //   transition.value = "slide-left"
  // })

  definePageMeta({
    pageTransition: { name: "slide-left" },
    middleware(to, from) {
      if (+to.query.page > +from.query.page) {
        to.meta.pageTransition.name = "slide-right"
        return
      }

      to.meta.pageTransition.name = "slide-left"
    },
  })
</script>
