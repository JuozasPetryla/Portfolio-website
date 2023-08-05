<template>
  <div class="tooltip-container">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tooltip-container {
  height: 3.2rem;
  width: fit-content;
  border-radius: 10px;
  background: #dee2e6;
  z-index: 1;
  padding: 0rem 1.6rem;
  text-align: center;
  position: absolute;
  top: -50%;
}

.tooltip-container p {
  font-size: 2.4rem;
  color: #333533;
  font-weight: 600;
}
@media (max-width: 1140px) {
  .tooltip-container {
    border-radius: 7px;
    height: 2.4rem;
  }

  .tooltip-container p {
    font-size: 1.6rem;
  }
}
@media (max-width: 992px) {
  .tooltip-container {
    border-radius: 5px;
    height: 1.5rem;
    padding: 0rem 1.4rem;
  }

  .tooltip-container p {
    font-size: 1.1rem;
  }
}
@media (max-width: 580px) {
  .tooltip-container {
    border-radius: 3px;
    height: 1.2rem;
    padding: 0rem 1rem;
  }

  .tooltip-container p {
    font-size: 0.8rem;
  }
}
@media (max-width: 580px) {
  .tooltip-container {
    height: 1.1rem;
  }
}
</style>
