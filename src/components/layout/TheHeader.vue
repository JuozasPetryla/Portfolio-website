<template>
  <header>
    <div class="header-logo"></div>
    <nav class="nav">
      <ul class="nav-list">
        <header-list-item @click="$emit('triggerAnimation')" :route="'/'">Home</header-list-item>
        <header-list-item @click="$emit('triggerAnimation')" :route="'/about'"
          >About</header-list-item
        >
        <header-list-item @click="$emit('triggerAnimation')" :route="'/projects'"
          >Projects</header-list-item
        >
        <header-list-item @click="$emit('triggerAnimation')" :route="'/contact'"
          >Contact</header-list-item
        >
      </ul>
    </nav>
  </header>
</template>

<script>
import HeaderListItem from './HeaderListItem.vue'
export default {
  components: {
    HeaderListItem
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #52b788;
  font-size: 3.2rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  color: #333533;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2.4rem;
}
</style>
