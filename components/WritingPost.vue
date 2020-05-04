<template>
  <div>
    <h3>{{ post.title }}</h3>
    <p>{{ post.created_at }}</p>
    <writing-tag-list :tags="post.tags"></writing-tag-list>
    <a :href="post.url"><button>SEE POST</button></a>
  </div>
</template>

<script>
export default {
  components: {
    WritingTagList: () => import('../components/WritingTagList.vue')
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
