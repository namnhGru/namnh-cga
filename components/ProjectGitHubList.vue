<template>
  <section>
    <h2 class="horizontal-big-headline">GITHUB</h2>
    <table>
      <tbody>
        <tr v-for="(git, i) in github" :key="i">
          <ProjectGitHub :git="git"></ProjectGitHub>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  components: {
    ProjectGitHub: () => import('../components/ProjectGitHub.vue')
  },
  props: {
    github: {
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
</style>
