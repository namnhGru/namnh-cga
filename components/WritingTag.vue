<template>
  <div>
    {{ tag }}
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
