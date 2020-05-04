<template>
  <div>
    <ul>
      <li v-for="(social, i) in socials" :key="i">
        <nuxt-link :to="social.link" target="_blank">
          <component :is="social.icon" class="icon"></component>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    IconGithub: () => import('../components/IconGithub.vue'),
    IconLinkin: () => import('../components/IconLinkin.vue'),
    IconFacebook: () => import('../components/IconFacebook.vue'),
    IconTwitter: () => import('../components/IconTwitter.vue')
  },
  data() {
    return {
      socials: [
        { icon: 'IconGithub', link: 'github.com' },
        { icon: 'IconLinkin', link: 'linkin.com' },
        { icon: 'IconFacebook', link: 'facebook.com' },
        { icon: 'IconTwitter', link: 'twitter.com' }
      ]
    }
  }
}
</script>

<style lang="postcss">
ul {
  @apply flex;
}
.icon {
  @apply px-2;
}
</style>
