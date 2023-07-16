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
  width: 25.5rem;
  height: 7rem;
  padding: 1rem 1rem 0.4rem 1rem;
  font-size: 3.2rem;
  background: inherit;
  font-weight: 600;
  border: none;
  color: #dee2e6;
  border-bottom: 0.8rem solid #40916c;
}

.btn,
.btn:visited {
  transition: all 0.3s;
  position: relative;
  z-index: 1;
}

.btn:hover,
.btn:active {
  cursor: pointer;
  color: #333533;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -2%;
  background: #40916c;
  z-index: -1;
  transition: transform 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: scaleY(0);
  transform-origin: bottom;
}

.btn:hover::before,
.btn:active::before {
  transform: scaleY(1);
}
</style>
