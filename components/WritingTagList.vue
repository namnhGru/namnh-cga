<template>
  <div class="flex justify-start">
    <h6 v-for="(tag, j) in tags" :key="j" class="tag-badge">
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
<style lang="postcss">
.tag-badge {
  @apply px-3 py-1 mr-2 my-3 border uppercase font-gotham;
  color: theme('color.orange_500');
  border-color: theme('color.light_nude');
  transition: color 0.5s, border-color 0.5s;
}
.tag-badge:hover {
  color: theme('color.light_nude');
  border-color: theme('color.orange_500');
}
</style>
