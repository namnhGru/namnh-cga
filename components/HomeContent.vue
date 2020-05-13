<template>
  <div>
    <main>
      <home-awesome-art></home-awesome-art>
      <div class="about-me-container">
        <home-about-me></home-about-me>
        <author-dad-and-daughter
          class="dad-and-daughter"
        ></author-dad-and-daughter>
      </div>
      <home-contact-me></home-contact-me>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    HomeAwesomeArt: () => import('./HomeAwesomeArt.vue'),
    HomeAboutMe: () => import('./HomeAboutMe.vue'),
    HomeContactMe: () => import('./HomeContactMe.vue'),
    AuthorDadAndDaughter: () => import('./AuthorDadAndDaughter.vue')
  }
}
</script>

<style lang="postcss">
main > * {
  @apply h-auto p-24 w-full;
  @media (max-width: 767px) {
    @apply h-auto p-6 w-full;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply h-auto p-6 w-full;
  }
}
.about-me-container {
  background: theme('color.light_nude');
  @apply flex flex-row justify-start;
}
.dad-and-daughter {
  @apply h-auto;
  padding-left: 3%;
  @media (max-width: 767px) {
    @apply hidden;
  }
  @media (max-width: 1500px) {
    @apply hidden;
  }
}
</style>
