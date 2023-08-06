import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ContactPage from '../views/ContactPage.vue'
import FormSuccess from '../views/FormSuccess.vue'
import FormFail from '../views/FormFail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/projects', name: 'projects', component: ProjectsPage },
    { path: '/contact', name: 'contact', component: ContactPage },
    {
      path: '/success',
      name: 'success',
      component: FormSuccess
    },
    {
      path: '/fail',
      name: 'fail',
      component: FormFail
    }
  ]
})

function waitForSomeTime(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

router.beforeEach(async (to, from, next) => {
  const delay = 1000

  await waitForSomeTime(delay)

  next()
})

export default router
