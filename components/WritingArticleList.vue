<template>
  <div class="article-list">
    <h2 class="horizontal-medium-headline">Technical writing</h2>
    <ul class="list-style-none">
      <li v-for="(article, i) in articles" :key="i" class="list-article">
        <writing-article :article="article"></writing-article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    WritingArticle: () => import('../components/WritingArticle.vue')
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.article-list {
  @apply pl-24;
}
.horizontal-medium-headline {
  @apply uppercase text-4xl font-black font-gotham;
}
.list-style-none {
  list-style: none;
  @apply flex flex-col pl-5 border-l;
  border-color: theme('color.gray_transparent');
}
.list-article {
  color: theme('color.gray');
}
.list-article::before {
  @apply float-left -ml-6 font-black;
  content: '\2022';
  color: theme('color.gray');
}
</style>
