<template>
  <section>
    <h2 class="horizontal-medium-headline">CODE PEN</h2>
    <div v-for="(pen, i) in pens" :key="i">
      <ProjectCodePen :pen="pen"></ProjectCodePen>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    ProjectCodePen: () => import('../components/ProjectCodePen.vue')
  },
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
.horizontal-medium-headline {
  @apply uppercase text-4xl font-black font-gotham;
}
.horizontal-big-headline {
  @apply font-gotham text-6xl font-black;
}
</style>
