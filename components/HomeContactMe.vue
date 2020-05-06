<template>
  <div class="form-contact-container">
    <div class="form-contact">
      <h2 class="text-white">Say Hello</h2>
      <br />
      <form>
        <p>
          <label for="name">Name</label>
          <br />
          <input class="width-16 border-bottom" type="text" name="name" />
        </p>
        <p>
          <label for="email">Email</label>
          <br />
          <input class="width-16 border-bottom" type="email" name="email" />
        </p>
        <p type="message">
          <label for="message">Message</label>
          <br />
          <textarea class="width-16 border-bottom" name="message"></textarea>
        </p>
        <p type="message">
          <button class="width-16 btn-send-to-me" type="submit">Send</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.form-contact-container {
  background-color: theme('color.gray_more_transparent');
  color: theme('color.white');
  @apply p-24 flex flex-col items-end;
  @media (max-width: 767px) {
    @apply p-0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply items-center;
  }
}
.text-white {
  @apply font-gotham font-black text-3xl tracking-normal;
  color: theme('color.white');
}
.form-contact {
  background-color: theme('color.gray_less_transparent');
  @apply px-16 py-16 m-12 flex flex-col items-center shadow-xl font-hairline text-xl uppercase font-gotham tracking-widest;
  color: theme('color.gray');
  @media (max-width: 767px) {
    @apply w-full m-0;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    @apply px-40;
  }
}
.width-16 {
  @apply w-64;
}
.border-bottom {
  @apply border-b-2 border-orange-500;
}

.btn-send-to-me {
  background-color: theme('color.orange_500');
  color: theme('color.primary');
  @apply rounded-full;
}
</style>
