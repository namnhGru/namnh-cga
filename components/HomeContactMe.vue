<template>
  <div class="form-contact-container">
    <div class="form-contact">
      <h2 class="text-white">Say Hello</h2>
      <br />
      <form>
        <p>
          <label for="name">Name</label>
          <br />
          <input type="text" name="name" />
        </p>
        <p>
          <label for="email">Email</label>
          <br />
          <input type="email" name="email" />
        </p>
        <p type="message">
          <label for="message">Message</label>
          <br />
          <textarea name="message"></textarea>
        </p>
        <p type="message">
          <button type="submit">Send</button>
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
}
.text-white {
  @apply font-gotham font-medium text-3xl tracking-normal;
  color: theme('color.white');
}
.form-contact {
  background-color: theme('color.gray_less_transparent');
  @apply px-32 py-16 m-12 flex flex-col items-center shadow-xl font-hairline text-xl uppercase font-gotham tracking-widest;
  color: theme('color.gray');
}
</style>
