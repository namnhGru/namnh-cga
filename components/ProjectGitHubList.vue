<template>
  <section>
    <h2>GITHUB</h2>
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

<style></style>
