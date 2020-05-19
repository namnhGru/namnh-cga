<template>
  <div>
    <h2 class="horizontal-big-headline">ON THIS SITE</h2>
    <ul class="flex flex-col">
      <li v-for="(post, i) in posts" :key="i" class="w-full">
        <writing-post :post="post"></writing-post>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="postcss"></style>
