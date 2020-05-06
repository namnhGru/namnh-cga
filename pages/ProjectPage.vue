<template>
  <div class="grid-writing-template">
    <h1 class="vertical-big-headline">Projects</h1>
    <ProjectCodePenList
      :pens="pens"
      class="col-start-2 col-end-3 row-span-2"
    ></ProjectCodePenList>
    <ProjectGitHubList :github="github" class="row-span-2"></ProjectGitHubList>
    <p class="follow-me">
      Follow me on
      <nuxt-link to="https://github.com" class="link-to">Github</nuxt-link>/
      <nuxt-link to="https://github.com" class="link-to">CodePen</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  components: {
    ProjectCodePenList: () => import('../components/ProjectCodePenList.vue'),
    ProjectGitHubList: () => import('../components/ProjectGitHubList.vue')
  },
  data() {
    return {
      pens: [
        {
          title: 'REACT ANIMATED PAGE TRANSITIONS',
          description:
            'Just a small demo to show a few page transitions in React. Using GreenSock and SVG.',
          url: 'https://github.com/'
        },
        {
          title: 'REACT ANIMATED PAGE TRANSITIONS',
          description:
            'Just a small demo to show a few page transitions in React. Using GreenSock and SVG.',
          url: 'https://github.com/'
        },
        {
          title: 'REACT ANIMATED PAGE TRANSITIONS',
          description:
            'Just a small demo to show a few page transitions in React. Using GreenSock and SVG.',
          url: 'https://github.com/'
        },
        {
          title: 'REACT ANIMATED PAGE TRANSITIONS',
          description:
            'Just a small demo to show a few page transitions in React. Using GreenSock and SVG.',
          url: 'https://github.com/'
        },
        {
          title: 'REACT ANIMATED PAGE TRANSITIONS',
          description:
            'Just a small demo to show a few page transitions in React. Using GreenSock and SVG.',
          url: 'https://github.com/'
        },
        {
          title: 'REACT ANIMATED PAGE TRANSITIONS',
          description:
            'Just a small demo to show a few page transitions in React. Using GreenSock and SVG.',
          url: 'https://github.com/'
        },
        {
          title: 'REACT ANIMATED PAGE TRANSITIONS',
          description:
            'Just a small demo to show a few page transitions in React. Using GreenSock and SVG.',
          url: 'https://github.com/'
        },
        {
          title: 'REACT ANIMATED PAGE TRANSITIONS',
          description:
            'Just a small demo to show a few page transitions in React. Using GreenSock and SVG.',
          url: 'https://github.com/'
        }
      ],
      github: [
        {
          title: 'ANIMATED GUIDE VUE3',
          star: 119,
          description: 'Animated Interfaces with Vue.js Workshop Materials'
        },
        {
          title: 'ANIMATED GUIDE VUE3',
          star: 119,
          description: 'Animated Interfaces with Vue.js Workshop Materials'
        },
        {
          title: 'ANIMATED GUIDE VUE3',
          star: 119,
          description: 'Animated Interfaces with Vue.js Workshop Materials'
        },
        {
          title: 'ANIMATED GUIDE VUE3',
          star: 119,
          description: 'Animated Interfaces with Vue.js Workshop Materials'
        },
        {
          title: 'ANIMATED GUIDE VUE3',
          star: 119,
          description: 'Animated Interfaces with Vue.js Workshop Materials'
        },
        {
          title: 'ANIMATED GUIDE VUE3',
          star: 119,
          description: 'Animated Interfaces with Vue.js Workshop Materials'
        },
        {
          title: 'ANIMATED GUIDE VUE3',
          star: 119,
          description: 'Animated Interfaces with Vue.js Workshop Materials'
        },
        {
          title: 'ANIMATED GUIDE VUE3',
          star: 119,
          description: 'Animated Interfaces with Vue.js Workshop Materials'
        },
        {
          title: 'ANIMATED GUIDE VUE3',
          star: 119,
          description: 'Animated Interfaces with Vue.js Workshop Materials'
        }
      ]
    }
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
.follow-me {
  @apply font-sourceserif text-lg font-medium pt-32 pl-8;
  color: theme('color.gray');
  opacity: 0.8;
}
.link-to {
  @apply font-black;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  color: theme('color.white');
}
.link-to:hover {
  opacity: 1;
  cursor: pointer;
}
</style>
