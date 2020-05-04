<template>
  <div>
    <a :href="article.url">{{ article.title }}</a>
    <br />
    <small>{{ article.small }}</small>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
