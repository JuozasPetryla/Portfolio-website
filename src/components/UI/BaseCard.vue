<template>
  <div class="card-container">
    <div class="card-image-container">
      <slot name="image"></slot>
    </div>
    <div class="card-content">
      <div class="card-content-text">
        <slot name="content"></slot>
      </div>
      <div class="technologies-logos">
        <slot name="logos"></slot>
      </div>
      <div class="card-buttons">
        <base-button class="card-button">Visit site</base-button>
        <base-button class="card-button">Project GitHub</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card-container {
  width: 90rem;
  height: 41rem;
  box-shadow: 1px 1px 1.5px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 5;
}

.card-image-container {
  width: 100%;
  height: 100%;
}

.card-buttons {
  display: flex;
  justify-content: space-around;
}

.card-content {
  position: absolute;
  top: -50%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

  color: #dee2e6;
  font-size: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  box-shadow: 0 -2px 5px 2px rgba(0, 0, 0, 0.3);
  padding: 3.2rem 3.2rem 1.2rem 3.2rem;
}

.card-button {
  width: 19.5rem;
  font-size: 2.4rem;
  color: #333533;
}

.technologies-logos {
  display: flex;
  gap: 3.2rem;
}
</style>
