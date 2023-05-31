<template>
  <!-- <MainGrid :posts="posts" /> -->
  <div>
    fuck
  </div>
</template>

<script setup>
import MainGrid from '@/components/MainGrid.vue'

const { data } = await useAsyncData('posts', () => queryContent('posts').only(['title']).find())

console.log(data)

// console.log(data)
// const blogPosts = await $content("blog")
//   .sortBy("createdAt", "desc")
//   .only(["title", "path"])
//   .fetch()
//   .catch((err) => {
//     error({ statusCode: 404, message: "Page not found" });
//   });

// const chunk = _chunk(blogPosts, 12);

// if (blogPosts.length > 12) {
//   store.pagination = {
//     active: true,
//     page: 1,
//     itemsOnPage: chunk[0].length,
//     totalItems: blogPosts.length,
//     totalPages: chunk.length,
//   };
// } else {
//   store.pagination = {
//     active: false,
//     page: 1,
//     itemsOnPage: blogPosts.length,
//     totalItems: blogPosts.length,
//     totalPages: chunk.length,
//   };
// }

// return {
//   posts: chunk,
//   count: blogPosts.length,
// };

</script>
