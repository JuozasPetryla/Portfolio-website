<template>
  <li class="nav-list-item">
    <router-link
      class="nav-link"
      :to="route"
      v-slot="{ isActive }"
    >
      <div class="pseudo" :class="{ 'active-link': isActive }"></div>
      <slot></slot
    ></router-link>
  </li>
</template>

<script>
export default {
  props: ['route']
}
</script>

<style scoped>
.nav-list-item {
  position: relative;
}
.pseudo {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.3rem;
  background: #333533;
  transform: scaleX(0);
  transform-origin: bottom;
  transition: all 0.3s ease-in-out;
}

.nav-list-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.3rem;
  background: #333533;
  transform: scaleX(0);
  transform-origin: bottom;
  transition: all 0.3s ease-in-out;
}

.nav-list-item:hover::before {
  transform: scaleX(1);
}

.active-link {
  transform: scaleX(1);
}
.nav-link {
  color: #333533;
  text-decoration: none;
}
</style>
