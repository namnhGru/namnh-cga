<template>
  <div>
    <ul class="nav-item">
      <li v-for="(menu, i) in menus" :key="i">
        <nuxt-link :to="menu.url">{{ menu.title.toUpperCase() }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { title: 'Writing', url: '/writing' },
        { title: 'Projects', url: '/project' }
      ]
    }
  }
}
</script>

<style lang="postcss">
.nav-item {
  @apply flex items-center justify-around font-gotham text-xl w-full;
  color: theme('color.gray');
}
</style>
