<template>
  <div class="grid-writing-template">
    <h1 class="vertical-big-headline">Writing</h1>
    <p class="col-start-2 col-end-4 font-serif text-xl">
      My writing on this site is mostly personal and self-contained technology
    </p>
    <writing-article-list
      :articles="articles"
      class="col-2-row-2"
    ></writing-article-list>
    <writing-filter :content="content"></writing-filter>
    <writing-post-list
      class="col-start-2 col-end-4"
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
  }
}
</script>

<style lang="postcss">
.grid-writing-template {
  @apply grid grid-cols-5 col-gap-32 p-16;
  grid-template-rows: 250px 1fr;
  position: relative;
  background-color: theme('color.primary');
  color: theme('color.white');
}
.vertical-big-headline {
  transform: rotate(90deg);
  transform-origin: 15% 130%;
  position: absolute;
  @apply uppercase font-gotham font-black text-6xl tracking-widest;
}
.col-2-row-2 {
  @apply col-span-2 row-span-2;
}
.font-serif {
  @apply font-sourceserif;
}
</style>
