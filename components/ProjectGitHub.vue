<template>
  <div>
    <h3>
      <a :href="git.url">{{ git.title }}</a>
    </h3>
    <p>{{ `✩ ${git.star}` }}</p>
    <p>{{ git.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    git: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
