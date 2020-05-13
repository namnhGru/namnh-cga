<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ created_at }}</p>
    <section>
      <writing-tag-list></writing-tag-list>
      <article>
        {{ paragraph }}
      </article>
    </section>
    <hr />
    <a :href="pen.url" target="_blank"
      ><button class="pill-pen-btn">See Pen</button></a
    >
    <p>More on this site</p>
    <ul>
      <li v-for="(writing, i) in writing" :key="i">
        <nuxt-link :to="writing.url">{{ writing.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
    WritingTagList: () => import('../../components/WritingTagList.vue')
  },
  computed: {
    created_at() {
      return this.$route.params.created_at
    },
    title() {
      return this.$route.params.title
    }
  },
  // methods: {
  //   translateRoute(slug) {
  //     if (slug)
  //   }
  // },
  beforeResolve(to, from, next) {}
}
</script>

<style></style>
