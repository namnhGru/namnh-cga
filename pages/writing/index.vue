<template>
  <div class="grid-writing-template">
    <h1 class="vertical-big-headline">Writing</h1>
    <p class="col-start-2 col-end-3 font-serif text-xl">
      My writing on this site is mostly personal and self-contained technology.
    </p>
    <writing-article-list
      :articles="$store.state.articles.allArticles"
      class="col-2-row-2 ipad-article"
    ></writing-article-list>
    <writing-filter
      class="writing-filter"
      :content="$store.state.tags.allTags"
    ></writing-filter>
    <writing-post-list
      class="col-start-2 col-end-3 ipad-post"
      :posts="$store.state.posts.allPosts"
    ></writing-post-list>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch('posts/getAllPosts')
    await store.dispatch('tags/getAllTags')
    await store.dispatch('articles/getAllArticles')
  },
  methods: {
    filterPost(tag) {}
  },
  transition: {
    mode: 'out-in'
  }
}
</script>

<style lang="postcss">
.writing-filter {
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
}
.grid-writing-template {
  @apply grid col-gap-16 p-16;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: 250px 1fr;
  position: relative;
  background-color: theme('color.primary');
  color: theme('color.white');
  @media (max-width: 767px) {
    grid-template-columns: 100px 2fr;
    grid-template-rows: 250px 1fr auto;
    @apply col-gap-0 row-gap-16 px-8;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 150px 2fr;
    grid-template-rows: 250px 1fr auto;
    @apply col-gap-0 row-gap-16;
  }
}
.ipad-post {
  @media (max-width: 767px) {
    @apply col-span-2 col-start-1;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply col-span-2 col-start-1;
  }
}
.ipad-article {
  @media (max-width: 767px) {
    @apply col-span-2 col-start-1 row-start-3;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply col-span-2 row-start-3;
  }
}
.vertical-big-headline {
  transform: rotate(90deg);
  transform-origin: 20% 120%;
  position: absolute;
  @apply uppercase font-gotham font-black text-6xl tracking-widest;
  @media (max-width: 767px) {
    transform-origin: 5% 90%;
  }
}
.font-serif {
  @apply font-sourceserif;
}
*:focus {
  outline-style: none;
}
</style>
