<template>
  <the-header></the-header>
  <router-view v-slot="{ Component }" class="all">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>

<style scoped></style>
