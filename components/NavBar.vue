<template>
  <div>
    <nav class="nav nav-primary">
      <nuxt-link to="/" class="logo">
        <SiteLogo class="logo-art"></SiteLogo>
        <span class="logo-name">Nam Nguyen</span>
      </nuxt-link>
      <LinkPage class="link-page"></LinkPage>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.nav {
  background-color: theme('color.primary');
  @apply text-white flex flex-row justify-between p-4;
  @media (max-width: 767px) {
    @apply flex-wrap justify-center;
  }
}
.logo {
  @apply flex items-center;
}
.logo-art {
  @media (max-width: 767px) {
    display: none;
  }
}
.link-page {
  @apply flex justify-center w-2/12;
  @media (max-width: 767px) {
    @apply w-8/12;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply w-4/12;
  }
}
.logo-name {
  @apply pl-3 font-gotham font-medium text-3xl uppercase;
}
</style>
