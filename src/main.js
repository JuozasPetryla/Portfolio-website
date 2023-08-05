import { createApp } from 'vue'
import { vue3Debounce } from 'vue-debounce'
import App from './App.vue'
import './main.css'
import router from './router'

import { defineAsyncComponent } from 'vue'

const BaseButton = defineAsyncComponent(() => import('./components/UI/BaseButton.vue'))
const BaseTooltip = defineAsyncComponent(() => import('./components/UI/BaseTooltip.vue'))
const BaseCard = defineAsyncComponent(() => import('./components/UI/BaseCard.vue'))
const BaseBackground = defineAsyncComponent(() => import('./components/UI/BaseBackground.vue'))

const app = createApp(App)

app.component('base-tooltip', BaseTooltip)
app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.component('base-background', BaseBackground)

app.use(router)

app.directive('debounce', vue3Debounce({ lock: true })).mount('#app')
