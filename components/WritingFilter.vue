<template>
  <div>
    <ul class="flex flex-col pt-32 pl-8">
      <li
        v-for="(item, i) in content"
        :key="i"
        class="tag-filter"
        @click="filterPost(item, i)"
      >
        {{ item }}
      </li>
      <div class="line" :style="computedPosition"></div>
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
  },
  data() {
    return {
      clickedItem: 0
    }
  },
  computed: {
    computedPosition() {
      return {
        transform: `translate3d(0px, ${this.clickedItem * 27}px, 0px)`
      }
    }
  },
  methods: {
    filterPost(item, i) {
      this.clickedItem = i
    }
  }
}
</script>

<style lang="postcss">
.tag-filter {
  @apply font-sourceserif text-lg font-medium;
  color: theme('color.gray');
  opacity: 0.8;
  transition: opacity 0.2s ease;
}
.tag-filter:hover {
  opacity: 1;
  cursor: pointer;
}
.line {
  width: 75px;
  height: 1px;
  background: theme('color.gray');
  position: absolute;
  top: 460px;
  left: 15px;
  transition: transform 0.2s ease;
}
</style>
