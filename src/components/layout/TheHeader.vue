<template>
  <header>
    <div class="header-logo" v-if="!mobile"></div>
    <div class="nav-flex">
      <nav class="nav" v-if="!mobile">
        <ul class="nav-list">
          <header-list-item
            v-for="item in mobileNav"
            @click="$emit('triggerAnimation')"
            :route="item.route"
            :key="item.name"
            >{{ item.name }}</header-list-item
          >
        </ul>
      </nav>
    </div>
    <div @click="openNav" class="nav-mobile-container" v-if="mobile">
      <div class="nav-flex">
        <img src="../../assets/menu-svgrepo-com.svg" class="menu-icon" />
      </div>
      <transition>
        <nav class="nav-mobile" v-if="mobileNavOpen">
          <ul class="nav-mobile-list">
            <header-list-item
              v-for="item in mobileNav"
              class="nav-mobile-list-item"
              @click="$emit('triggerAnimation')"
              :route="item.route"
              :key="item.name"
              >{{ item.name }}</header-list-item
            >
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
import { ref, reactive } from 'vue'
import HeaderListItem from './HeaderListItem.vue'
export default {
  components: {
    HeaderListItem
  },
  setup() {
    const mobileNav = reactive([
      {
        route: '/',
        name: 'Home'
      },
      {
        route: '/about',
        name: 'About'
      },
      {
        route: '/projects',
        name: 'Projects'
      },
      {
        route: '/contact',
        name: 'Contact'
      }
    ])
    const mobile = ref(false)
    const mobileNavOpen = ref(false)

    const openNav = function () {
      mobileNavOpen.value = !mobileNavOpen.value
    }

    if (window.innerWidth < 992) {
      mobile.value = true
    }

    const setMobile = () => {
      mobile.value = window.innerWidth < 992
    }

    window.addEventListener('resize', setMobile)

    return { mobile, mobileNavOpen, openNav, mobileNav }
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
  justify-content: center;
}

.nav-mobile-container {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  position: relative;
}
.nav-list {
  display: flex;
  list-style: none;
  gap: 2.4rem;
}

.nav-mobile-list {
  padding-top: 9.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 6.4rem;
}




.nav-mobile-list-item {
  font-size: 6.4rem;
}

.nav-mobile {
  position: absolute;
  top: 125%;
  background-color: #52b788;
  width: 100vw;
  height: 100vh;
  transform-origin: top;
  z-index: 999;
}

.nav-mobile::before {
  content: '';
  position: absolute;
  top: 5%;
  right: 5%;
  left: 5%;
  bottom: 0;
  border-top: 3px solid #333533;
  transform: scaleX(0);
  animation: borderScale 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.4s;
}

.menu-icon {
  width: 4.8rem;
  display: flex;
  align-items: center;
  align-self: flex-end;
}

.nav-flex {
  display: flex;
  justify-content: flex-end;
  width: 95vw;
}

.menu-icon:hover,
.menu-icon:active {
  cursor: pointer;
}

.v-enter-active {
  animation: enterNav 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
}
.v-leave-active {
  animation: enterNav 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) forwards reverse;
}

@keyframes enterNav {
  0% {
    z-index: 999;
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
    z-index: 999;
  }
}

@keyframes borderScale {
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
}

@media (max-width: 768px) {
  .nav-mobile-list {
    padding-top: 7.2rem;

    gap: 4.8rem;
  }

  .nav-mobile-list-item {
    font-size: 4.8rem;
  }
}

@media (max-width: 660px) {
  .menu-icon {
    width: 3.2rem;
  }
  header {
    padding: 0.8rem 1.8rem;
  }
}
@media (max-width: 480px) {
  .menu-icon {
    width: 2.4rem;
  }
  header {
    padding: 0.6rem 1.6rem;
  }
  .nav-mobile-list {
    padding-top: 6.4rem;

    gap: 3.2rem;
  }

  .nav-mobile-list-item {
    font-size: 3.2rem;
  }
}
</style>
