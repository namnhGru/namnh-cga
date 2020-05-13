<template>
  <div>
    {{ tag.category }}
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
