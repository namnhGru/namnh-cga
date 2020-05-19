<template>
  <div>
    <footer>
      <nuxt-link to="/">
        <SiteLogo></SiteLogo>
      </nuxt-link>
      <link-page class="footer-link"></link-page>
      <hr />
      <link-social></link-social>
    </footer>
  </div>
</template>

<script>
export default {}
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
  @apply flex flex-row justify-center w-2/12;
  @media (max-width: 767px) {
    @apply w-8/12;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply w-4/12;
  }
}
hr {
  @apply w-10/12 h-1 opacity-25;
}
</style>
