<template>
  <div>
    {{ tag.title }}
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
