<template>
  <div class="about-me-div">
    <h2 class="text-primary">About Me</h2>
    <div class="about-me-paragraph">
      <img src="/rsz_2015-portrait.jpg" class="portrait-man" alt="" />
      <p>
        Greeting! <br />
        Nam Nguyen is a fullstack developer with 3 years of experience in
        frontend and some little backend development. Currently he is working
        with Infinigru Corp, a bank's solution company located in Seoul, Korea.
        Nam former work was mostly with FPT Corp, a big technology company in
        Vietnam, where he was responsible for doing automation on FPT provider
        network. He was also the author of Auto Network Troubleshoot System,
        part of a full-scale network automation platform for FPT Telecom, which
        recently received a medal of honour by FPT President Truong Gia Binh for
        its effectiveness. He has been working for 5 years and recognized as
        senior networking engineer with passion and responsibility. <br />
        In 2017, he made a move to script writing and envolving to software
        developers. On education, Nam has an Engineering degree in Military
        Technical Academy and recently pursuit a Master degree in Data Science
        at Hanoi University of Science, but he've just quitted after feeling the
        course is not good enough. For hobbies, Nam loves playing musical
        instruments and sport. He's also interested in meditation and other
        physical training.
      </p>
      <LinkSocial class="link-social"></LinkSocial>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    LinkSocial: () => import('./LinkSocial.vue')
  }
}
</script>

<style lang="postcss">
.portrait-man {
  object-fit: cover;
}
.about-me-div {
  background: url('/dad-and-daughter.jpg'), theme('color.light_nude');
  @apply bg-no-repeat bg-contain;
  background-size: 70%;
  background-position: right -80% bottom 100%;
  @media (max-width: 767px) {
    @apply p-0 pt-5;
    background: theme('color.primary');
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    background: theme('color.light_nude');
  }
}
.text-primary {
  color: theme('color.primary');
  @apply mb-3 font-gotham font-black text-3xl uppercase;
  @media (max-width: 767px) {
    @apply text-center;
    color: theme('color.white');
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    background: theme('color.light_nude');
  }
}
.about-me-paragraph {
  background: theme('color.gray_less_transparent');
  color: theme('color.white');
  @apply p-5 w-8/12 bg-opacity-50 text-justify font-sourceserif text-xl shadow-xl;
  @media (max-width: 767px) {
    @apply w-full;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply w-full;
  }
}
p {
  @apply mb-3;
}
.link-social {
  @apply flex justify-end;
}
img {
  @apply rounded-full h-32 w-32 float-left mr-3;
}
</style>
