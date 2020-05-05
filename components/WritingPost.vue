<template>
  <div class="border-bottom-post">
    <h3 class="horizontal-small-headline">{{ post.title }}</h3>
    <p class="time-format">{{ postCreatedAt }}</p>
    <writing-tag-list :tags="post.tags"></writing-tag-list>
    <a :href="post.url"><button class="pill-btn">SEE POST ⟶</button></a>
  </div>
</template>

<script>
import { formatDate } from './helper.js'
export default {
  components: {
    WritingTagList: () => import('../components/WritingTagList.vue')
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    postCreatedAt() {
      return formatDate(this.post.created_at)
    }
  }
}
</script>
<style lang="postcss">
.horizontal-small-headline {
  @apply uppercase font-gotham font-black text-3xl;
}
.time-format {
  @apply font-sourceserif text-xl;
  color: theme('color.gray');
}
.border-bottom-post {
  @apply border-b w-full py-3 mb-8;
  border-color: theme('color.gray_transparent');
  opacity: 0.8;
  border-width: 70%;
  position: relative;
  transition: opacity 0.2s ease;
}

.border-bottom-post:hover {
  opacity: 1;
}
.pill-btn {
  @apply rounded-full px-8 py-1 font-gotham font-hairline;
  background-color: theme('color.orange_500');
  position: absolute;
  bottom: -15px;
  right: -10%;
  color: theme('color.primary');
  transition: all 0.2s ease;
}
.pill-btn:hover {
  right: -11%;
  color: theme('color.white');
}
</style>
