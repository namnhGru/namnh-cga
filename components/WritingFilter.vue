<template>
  <div>
    <ul>
      <li v-for="(item, i) in content" :key="i" @click="filterPost(item.title)">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
