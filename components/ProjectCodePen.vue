<template>
  <div class="border-bottom-post">
    <h3 class="horizontal-tiny-headline">{{ pen.title }}</h3>
    <p class="description-format">{{ pen.description }}</p>
    <a :href="pen.url" target="_blank"
      ><button class="pill-pen-btn">See Pen</button></a
    >
    <iframe src="" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    pen: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.horizontal-tiny-headline {
  @apply uppercase font-gotham font-black text-2xl;
}
.description-format {
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
.pill-pen-btn {
  @apply uppercase rounded-full px-8 py-1 font-gotham font-hairline;
  background-color: theme('color.orange_500');
  position: absolute;
  bottom: -15px;
  right: 0%;
  color: theme('color.primary');
  transition: all 0.2s ease;
}
.pill-pen-btn:hover {
  right: -1%;
  color: theme('color.white');
}
</style>
