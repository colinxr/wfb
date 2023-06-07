<template>
  <EntryLayout :entry="entry" />
</template>

<script setup>
  const route = useRoute()

  const { data: entry } = await useAsyncData("page", () =>
    queryContent("pages").where({ slug: route.params.slug }).findOne()
  )

  definePageMeta({
    pageTransition: { name: "slide-left" },
    middleware(to, from) {
      if (!from) {
        to.meta.pageTransition.name = "fade"
        return
      }

      if (+to.query.page > +from.query.page) {
        to.meta.pageTransition.name = "slide-right"
        return
      }

      to.meta.pageTransition.name = "slide-left"
    },
  })
</script>
