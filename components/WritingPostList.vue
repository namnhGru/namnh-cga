<template>
  <div>
    <h1>ON THIS SITE</h1>
    <ul>
      <li v-for="(post, i) in posts" :key="i">
        <writing-post :post="post"></writing-post>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    WritingPost: () => import('../components/WritingPost.vue')
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
