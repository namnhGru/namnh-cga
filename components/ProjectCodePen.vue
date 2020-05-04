<template>
  <div>
    <h3>{{ pen.title }}</h3>
    <p>{{ pen.description }}</p>
    <a :href="pen.url" target="_blank"><button>See Pen</button></a>
    <iframe src="" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    pen: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
