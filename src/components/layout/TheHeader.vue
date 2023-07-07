<template>
  <header>
    <div class="header-logo">Logo</div>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list-item">Home</li>
        <li class="nav-list-item">About</li>
        <li class="nav-list-item">Projects</li>
        <li class="nav-list-item">Contact</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
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
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2.4rem;
}
</style>
