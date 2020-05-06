<template>
  <div class="github-container">
    <h3 class="horizontal-tiny-headline">
      <a :href="git.url">{{ git.title }}</a>
    </h3>
    <p class="time-format">{{ `✩ ${git.star}` }}</p>
    <p class="time-format">{{ git.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    git: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.github-container {
  @apply pb-4 w-full;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.github-container:hover {
  opacity: 1;
}
.horizontal-tiny-headline {
  @apply uppercase font-gotham font-black text-2xl;
}
.time-format {
  @apply font-sourceserif text-xl;
  color: theme('color.gray');
}
</style>
