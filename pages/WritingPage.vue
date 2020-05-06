<template>
  <div class="grid-writing-template">
    <h1 class="vertical-big-headline">Writing</h1>
    <p class="col-start-2 col-end-3 font-serif text-xl">
      My writing on this site is mostly personal and self-contained technology
    </p>
    <writing-article-list
      :articles="articles"
      class="col-2-row-2"
    ></writing-article-list>
    <writing-filter :content="content"></writing-filter>
    <writing-post-list
      class="col-start-2 col-end-3"
      :posts="posts"
    ></writing-post-list>
  </div>
</template>

<script>
export default {
  components: {
    WritingFilter: () => import('../components/WritingFilter.vue'),
    WritingPostList: () => import('../components/WritingPostList.vue'),
    WritingArticleList: () => import('../components/WritingArticleList.vue')
  },
  data() {
    return {
      content: ['all post', 'life update', 'all post', 'life update'],
      posts: [
        {
          title: 'Why Netlify',
          created_at: new Date(),
          tags: ['All posts', 'Life update']
        },
        {
          title: 'Why Netlify',
          created_at: new Date(),
          tags: ['All posts', 'Life update']
        },
        {
          title: 'Why Netlify',
          created_at: new Date(),
          tags: ['All posts', 'Life update']
        },
        {
          title: 'Why Netlify',
          created_at: new Date(),
          tags: ['All posts', 'Life update']
        },
        {
          title: 'Why Netlify',
          created_at: new Date(),
          tags: ['All posts', 'Life update']
        },
        {
          title: 'Why Netlify',
          created_at: new Date(),
          tags: ['All posts', 'Life update']
        }
      ],
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
.grid-writing-template {
  @apply grid col-gap-16 p-16;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: 250px 1fr;
  position: relative;
  background-color: theme('color.primary');
  color: theme('color.white');
}
.vertical-big-headline {
  transform: rotate(90deg);
  transform-origin: 20% 120%;
  position: absolute;
  @apply uppercase font-gotham font-black text-6xl tracking-widest;
}
.font-serif {
  @apply font-sourceserif;
}
</style>
