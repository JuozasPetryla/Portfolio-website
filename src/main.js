import { createApp } from 'vue'
import { vue3Debounce } from 'vue-debounce'
import App from './App.vue'
import './main.css'
import router from './router'

import BaseButton from './components/UI/BaseButton.vue'
import BaseTooltip from './components/UI/BaseTooltip.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseBackground from './components/UI/BaseBackground.vue'
const app = createApp(App)

app.component('base-tooltip', BaseTooltip)
app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.component('base-background', BaseBackground)

app.use(router)

app.directive('debounce', vue3Debounce({ lock: true })).mount('#app')
