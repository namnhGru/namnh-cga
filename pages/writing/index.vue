<template>
  <div class="grid-writing-template">
    <h1 class="vertical-big-headline">Writing</h1>
    <p class="col-start-2 col-end-3 font-serif text-xl">
      My writing on this site is mostly personal and self-contained technology.
    </p>
    <writing-article-list
      :articles="articles"
      class="col-2-row-2 ipad-article"
    ></writing-article-list>
    <writing-filter class="writing-filter" :content="content"></writing-filter>
    <writing-post-list
      class="col-start-2 col-end-3 ipad-post"
      :posts="posts"
    ></writing-post-list>
  </div>
</template>

<script>
export default {
  components: {
    WritingFilter: () => import('../../components/WritingFilter.vue'),
    WritingPostList: () => import('../../components/WritingPostList.vue'),
    WritingArticleList: () => import('../../components/WritingArticleList.vue')
  },
  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.$get(
        'https://secure-wave-64960.herokuapp.com/posts'
      )
      return { posts: data }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  data() {
    return {
      content: ['all post', 'life update', 'all post', 'life update'],
      posts: [],
      articles: [
        {
          title: 'How to Scope Down PRs',
          url: 'adf',
          created_at: new Date(),
          origin: 'Netlify Blog'
        },
        {
          title: 'How to Scope Down PRs',
          url: 'adf',
          created_at: new Date(),
          origin: 'Netlify Blog'
        },
        {
          title: 'How to Scope Down PRs',
          url: 'adf',
          created_at: new Date(),
          origin: 'Netlify Blog'
        },
        {
          title: 'How to Scope Down PRs',
          url: 'adf',
          created_at: new Date(),
          origin: 'Netlify Blog'
        },
        {
          title: 'How to Scope Down PRs',
          url: 'adf',
          created_at: new Date(),
          origin: 'Netlify Blog'
        },
        {
          title: 'How to Scope Down PRs',
          url: 'adf',
          created_at: new Date(),
          origin: 'Netlify Blog'
        },
        {
          title: 'How to Scope Down PRs',
          url: 'adf',
          created_at: new Date(),
          origin: 'Netlify Blog'
        },
        {
          title: 'How to Scope Down PRs',
          url: 'adf',
          created_at: new Date(),
          origin: 'Netlify Blog'
        },
        {
          title: 'How to Scope Down PRs',
          url: 'adf',
          created_at: new Date(),
          origin: 'Netlify Blog'
        }
      ]
    }
  },
  methods: {
    filterPost(tag) {}
  },
  transition: {
    mode: 'out-in'
  }
}
</script>

<style lang="postcss">
.writing-filter {
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
}
.grid-writing-template {
  @apply grid col-gap-16 p-16;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: 250px 1fr;
  position: relative;
  background-color: theme('color.primary');
  color: theme('color.white');
  @media (max-width: 767px) {
    grid-template-columns: 100px 2fr;
    grid-template-rows: 250px 1fr auto;
    @apply col-gap-0 row-gap-16 px-8;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 150px 2fr;
    grid-template-rows: 250px 1fr auto;
    @apply col-gap-0 row-gap-16;
  }
}
.ipad-post {
  @media (max-width: 767px) {
    @apply col-span-2 col-start-1;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply col-span-2 col-start-1;
  }
}
.ipad-article {
  @media (max-width: 767px) {
    @apply col-span-2 col-start-1 row-start-3;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply col-span-2 row-start-3;
  }
}
.vertical-big-headline {
  transform: rotate(90deg);
  transform-origin: 20% 120%;
  position: absolute;
  @apply uppercase font-gotham font-black text-6xl tracking-widest;
  @media (max-width: 767px) {
    transform-origin: 5% 90%;
  }
}
.font-serif {
  @apply font-sourceserif;
}
</style>
