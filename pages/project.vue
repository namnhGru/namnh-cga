<template>
  <div class="grid-project-template">
    <h1 class="vertical-big-headline">Projects</h1>
    <ProjectCodePenList
      :pens="$store.state.pens.allPens"
      class="ipad-codepen"
    ></ProjectCodePenList>
    <ProjectGitHubList
      :github="$store.state.githubs.allGithubs"
      class="ipad-github"
    ></ProjectGitHubList>
    <p class="follow-me">
      Follow me on
      <nuxt-link to="https://github.com" class="link-to">Github</nuxt-link>/
      <nuxt-link to="https://github.com" class="link-to">CodePen</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch('pens/getAllPens')
    await store.dispatch('githubs/getAllGithubs')
  }
}
</script>

<style lang="postcss">
.grid-project-template {
  @apply grid col-gap-16 p-16;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: 250px 1fr;
  position: relative;
  background-color: theme('color.primary');
  color: theme('color.white');
  @media (max-width: 767px) {
    grid-template-columns: 100px 2fr;
    grid-template-rows: 250px 1fr auto;
    @apply col-gap-0 row-gap-16 px-8;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 150px 2fr;
    grid-template-rows: 250px 1fr auto;
    @apply col-gap-0 row-gap-16;
  }
}
.font-serif {
  @apply font-sourceserif;
}
.follow-me {
  @apply font-sourceserif text-lg font-medium pt-32 pl-8;
  color: theme('color.gray');
  opacity: 0.8;
  @media (max-width: 767px) {
    @apply row-start-1 col-start-2 p-0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply row-start-1 col-start-2 p-0;
  }
}
.link-to {
  @apply font-black;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  color: theme('color.white');
}
.link-to:hover {
  opacity: 1;
  cursor: pointer;
}
.ipad-github {
  @apply col-start-3 row-start-1 row-span-2;
  @media (max-width: 767px) {
    @apply row-start-3 col-start-1 p-0 col-span-2;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply row-start-3 col-start-1 p-0 col-span-2;
  }
}
.ipad-codepen {
  @apply col-start-2 row-start-1 row-span-2;
  @media (max-width: 767px) {
    @apply row-start-2 col-start-1 p-0 col-span-2 row-span-1;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply row-start-2 col-start-1 p-0 col-span-2 row-span-1;
  }
}
</style>
