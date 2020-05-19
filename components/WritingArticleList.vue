<template>
  <div class="article-list">
    <h2 class="horizontal-big-headline">Technical</h2>
    <ul class="list-style-none">
      <li v-for="(article, i) in articles" :key="i" class="list-article">
        <writing-article :article="article"></writing-article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
  @media (max-width: 767px) {
    @apply pl-0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply pl-0;
  }
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
