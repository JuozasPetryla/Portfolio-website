<template>
  <header>
    <div class="header-logo"></div>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list-item"><router-link class="nav-link" to="/">Home</router-link></li>
        <li class="nav-list-item"><router-link class="nav-link" to="/about">About</router-link></li>
        <li class="nav-list-item">
          <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>
        <li class="nav-list-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
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
  color: #333533;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2.4rem;
}

.nav-list-item {
  position: relative;
}
.nav-list-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.4rem;
  background: #333533;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.nav-list-item:hover::before,
.nav-list-item:active::before {
  transform: scaleX(1);
}
.nav-link {
  color: #333533;
  text-decoration: none;
}
</style>
