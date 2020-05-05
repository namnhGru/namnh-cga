<template>
  <div class="article-gray">
    <a :href="article.url" class="source-serif-black">{{ article.title }}</a>
    <br />
    <small class="source-serif-description">{{ articleCreatedAt }}</small>
  </div>
</template>

<script>
import { formatDate } from './helper.js'
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    articleCreatedAt() {
      return `published on ${formatDate(this.article.created_at)} on ${
        this.article.origin
      }`
    }
  }
}
</script>

<style lang="postcss">
.article-gray {
  color: theme('color.gray');
  opacity: 0.8;
  transition: opacity 0.2s ease;
}
.article-gray:hover {
  opacity: 1;
}
.source-serif-black {
  @apply font-sourceserif text-lg font-black tracking-wide;
}
.source-serif-description {
  @apply font-sourceserif text-base font-medium;
}
</style>
