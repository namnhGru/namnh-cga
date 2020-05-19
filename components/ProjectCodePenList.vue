<template>
  <section>
    <h2 class="horizontal-big-headline">CODE PEN</h2>
    <div v-for="(pen, i) in pens" :key="i">
      <ProjectCodePen :pen="pen"></ProjectCodePen>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pens: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="postcss">
.horizontal-small-headline {
  @apply uppercase font-gotham font-black text-3xl;
}
.horizontal-big-headline {
  @apply uppercase font-gotham text-5xl font-black;
  @media (min-width: 1024px) {
    @apply text-6xl;
  }
}
</style>
