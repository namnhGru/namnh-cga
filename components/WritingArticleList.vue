<template>
  <div>
    <h2>Technical writing</h2>
    <ul>
      <li v-for="(article, i) in articles" :key="i">
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

<style></style>
