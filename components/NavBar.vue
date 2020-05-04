<template>
  <div>
    <nav class="nav nav-primary">
      <nuxt-link to="/homepage" class="logo">
        <SiteLogo></SiteLogo>
        <span>Nam Nguyen</span>
      </nuxt-link>
      <LinkPage class="link-page"></LinkPage>
    </nav>
  </div>
</template>

<script>
export default {
  components: {
    LinkPage: () => import('./LinkPage.vue'),
    SiteLogo: () => import('./SiteLogo.vue')
  }
}
</script>

<style lang="postcss">
.nav {
  background-color: theme('color.primary');
  @apply text-white flex flex-row justify-between p-4;
}
.logo {
  @apply flex items-center;
}
.link-page {
  @apply flex justify-center w-3/12;
}
span {
  @apply pl-3 font-gotham font-medium text-3xl uppercase;
}
</style>
