<template>
  <div>
    <main>
      <home-awesome-art></home-awesome-art>
      <home-about-me></home-about-me>
      <home-contact-me></home-contact-me>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    HomeAwesomeArt: () => import('./HomeAwesomeArt.vue'),
    HomeAboutMe: () => import('./HomeAboutMe.vue'),
    HomeContactMe: () => import('./HomeContactMe.vue')
  }
}
</script>

<style lang="postcss">
main > * {
  @apply h-auto p-24 w-full;
}
</style>
