<template>
  <div>
    <footer>
      <nuxt-link to="/homepage">
        <SiteLogo></SiteLogo>
      </nuxt-link>
      <LinkPage class="footer-link"></LinkPage>
      <hr />
      <LinkSocial></LinkSocial>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
    LinkPage: () => import('../components/LinkPage.vue'),
    SiteLogo: () => import('../components/SiteLogo.vue'),
    LinkSocial: () => import('../components/LinkSocial.vue')
  }
}
</script>

<style lang="postcss">
footer {
  background-color: theme('color.primary');
  color: theme('color.white');
  @apply flex flex-col items-center p-3;
}
footer > * {
  @apply mb-3;
}
.footer-link {
  @apply flex flex-row justify-center w-3/12;
}
hr {
  @apply w-10/12 h-1 opacity-25;
}
</style>
