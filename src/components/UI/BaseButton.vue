<template>
  <button class="btn">
    <slot class="btn-text"></slot>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.btn {
  width: 30rem;
  height: 9rem;
  padding: 1.2rem 3.2rem;
  background: #40916c;
  font-size: 3.2rem;
  color: #dee2e6;
  font-weight: 600;
  border: none;
}
</style>
