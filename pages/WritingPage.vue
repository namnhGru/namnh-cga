<template>
  <div>
    <h1>Writing</h1>
    <writing-filter :content="content"></writing-filter>
    <p>Opening of Writing Page</p>
    <writing-post-list></writing-post-list>
    <writing-article-list></writing-article-list>
  </div>
</template>

<script>
export default {
  components: {
    WritingFilter: () => import('../components/WritingFilter.vue'),
    WritingPostList: () => import('../components/WritingPostList.vue'),
    WritingArticleList: () => import('../components/WritingArticleList.vue')
  },
  methods: {
    filterPost(tag) {}
  }
}
</script>

<style></style>
