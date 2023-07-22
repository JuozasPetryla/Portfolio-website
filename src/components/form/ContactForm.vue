<template>
  <form class="contact-form">
    <div class="form-control">
      <label for="name"></label>
      <input type="text" name="name" id="name" placeholder="Name" />
    </div>
    <div class="form-control">
      <label for="email"></label>
      <input type="email" name="email" id="email" placeholder="Email" />
    </div>
    <div class="form-control">
      <label for="message"></label>
      <textarea type="text" name="message" id="message" rows="5" placeholder="Message" />
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: #40916c;
  width: 125%;
  border-radius: 8px;
  height: 75%;
  padding: 4.8rem 4.8rem;
  box-shadow: 1.5px 2px 3px 1.5px rgba(0, 0, 0, 0.3);
}
input {
  width: 50rem;
  height: 3rem;
  padding-left: 0.6rem;
  font-size: 2rem;
  background: #333533;
  color: #dee2e6;
}
textarea {
  width: 50rem;
  height: 15rem;
  padding-left: 0.6rem;
  padding-top: 0.6rem;
  font-size: 2rem;
  font-family: sans-serif;
  color: #dee2e6;
  background: #333533;
  resize: none;
}
</style>
