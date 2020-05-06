<template>
  <div>
    <home-content></home-content>
  </div>
</template>

<script>
export default {
  components: {
    HomeContent: () => import('../components/HomeContent.vue')
  }
}
</script>
