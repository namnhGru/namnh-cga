<template>
  <section>
    <h2>CODE PEN</h2>
    <div v-for="(pen, i) in pens" :key="i">
      <ProjectCodePen></ProjectCodePen>
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

<style></style>
