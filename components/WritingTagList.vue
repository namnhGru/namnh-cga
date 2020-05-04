<template>
  <div>
    <h6 v-for="(tag, j) in post.tags" :key="j">
      <writing-tag :tag="tag"></writing-tag>
    </h6>
  </div>
</template>

<script>
export default {
  components: {
    WritingTag: () => import('../components/WritingTag.vue')
  },
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
