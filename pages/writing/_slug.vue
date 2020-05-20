<template>
  <div class="writing-container">
    <div class="title-container">
      <h1 class="big-title">{{ writing.title }}</h1>
      <p class="small-description">{{ writing_createdAt }}</p>
    </div>
    <div class="bg-img"></div>
    <section class="writing-content">
      <div class="blog-nav">
        <p class="more-on-site">More on this site</p>
        <ul class="list-writing">
          <li v-for="(article, i) in articles" :key="i">
            <nuxt-link :to="article.slug">{{ article.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <!-- <writing-tag-list></writing-tag-list> -->
      <article class="main-writing" v-html="writing.content"></article>
      <hr class="end-writing" />
      <nuxt-link to="/writing"
        ><button class="pill-writing-button">
          See All writing ⟶
        </button></nuxt-link
      >
    </section>
  </div>
</template>

<script>
import { formatDate } from '../../utils/helper'
export default {
  async asyncData({ store, params }) {
    if (!store.state.posts.allPosts.length) {
      await store.dispatch('posts/getAllPosts')
    }
    const writing = store.state.posts.allPosts.find(
      (post) => post.slug === params.slug
    )
    return { writing }
  },
  data() {
    return {
      writing: {}
    }
  },
  computed: {
    articles() {
      return this.$store.state.posts.allPosts
    },
    writing_createdAt() {
      return formatDate(this.writing.created_at)
    }
  }
}
</script>

<style lang="postcss">
.main-writing {
  @apply max-w-xl;
}
.small-description {
  @apply text-xl font-sourceserif font-hairline;
}
.writing-container {
  @apply relative pt-64 pl-16;
  background-color: theme('color.white');
  @media (max-width: 767px) {
    @apply p-0;
  }
}
.title-container {
  @apply absolute z-50;
  top: 85px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0);
  color: theme('color.white');
  @media (max-width: 767px) {
    top: 50px;
    @apply pl-10;
  }
}
.big-title {
  @apply font-sourceserif text-5xl font-black;
  @media (max-width: 767px) {
    @apply text-4xl;
  }
}
.bg-img {
  @apply absolute top-0 left-0 w-full border-b-4 bg-cover;
  border-color: theme('color.orange_500');
  background: url('/background-writing.jpg') center center no-repeat;
  height: 400px;
  @media (max-width: 767px) {
    @apply static;
    height: 200px;
  }
}
.writing-content {
  @apply relative font-sourceserif text-xl font-hairline pt-10 px-8 pb-12;
  color: theme('color.primary');
  background-color: theme('color.white');
  @media (max-width: 1024px) {
    @apply text-justify;
  }
}
.blog-nav {
  @apply sticky float-right border-l pl-16 pr-24 w-3/12 py-16;
  border-color: theme('color.gray');
  top: 0px;
  margin-top: -40px;
  @media (max-width: 1024px) {
    @apply static;
    display: none;
  }
}
.more-on-site {
  @apply uppercase text-2xl font-black font-gotham pb-4;
}
.list-writing {
  list-style: square;
  @apply block;
}
.list-writing li {
  @apply pb-2;
  color: theme('color.gray');
}
.end-writing {
  @apply w-4/12 mt-12;
  background-image: linear-gradient(
    90deg,
    rgba(246, 173, 85, 0.1),
    rgba(246, 173, 85, 1),
    rgba(246, 173, 85, 0.1)
  );
}
.pill-writing-button {
  @apply uppercase font-gotham text-lg rounded-full border-black border-2 py-1 px-24 mt-12;
  border-color: theme('color.orange_500');
  color: theme('color.orange_500');
}
</style>
