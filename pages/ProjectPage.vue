<template>
  <div>
    <h1>Project</h1>
    <p>Follow me on Github/ Code Pen</p>
    <ProjectCodePenList :pens="pens"></ProjectCodePenList>
    <ProjectGitHubList :github="github"></ProjectGitHubList>
  </div>
</template>

<script>
export default {
  components: {
    ProjectCodePenList: () => import('../components/ProjectCodePenList.vue'),
    ProjectGitHubList: () => import('../components/ProjectGitHubList.vue')
  }
}
</script>

<style></style>
