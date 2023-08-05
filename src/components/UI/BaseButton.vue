<template>
  <button class="btn">
    <span>
      <slot class="btn-text"></slot>
    </span>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.btn {
  width: 25.6rem;
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
}

span {
  transition: all 0.3s ease;
}

span:hover {
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

@media (max-width: 992px) {
  .btn {
    width: 19rem;
    font-size: 2.4rem;
  }
}

@media (max-width: 768px) {
  .btn {
    width: 17rem;
    font-size: 2rem;
  }
}
@media (max-width: 660px) {
  .btn {
    width: 16rem;
    font-size: 2rem;
    height: 5rem;
    padding: 0.8rem 0.8rem 0.4rem 0.8rem;
    border-bottom: 0.6rem solid #40916c;
  }
}
@media (max-width: 480px) {
  .btn {
    width: 12rem;
    font-size: 1.4rem;
    height: 4rem;
    padding: 0.4rem 0.4rem 0.4rem 0.4rem;
    border-bottom: 0.4rem solid #40916c;
  }
}
@media (max-width: 480px) {
  .btn {
    width: 10rem;
    font-size: 1.2rem;
    height: 3.2rem;
    padding: 0.4rem 0.4rem 0.4rem 0.4rem;
    border-bottom: 0.4rem solid #40916c;
  }
}
</style>
