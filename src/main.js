import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide('$log', function (...params) {
  const [firstParam, ...otherParams] = params
  const css =
    'background:#69F0AE; padding: 5px; border-radius: 5px; color: #000; margin-right: 3px'
  return console.log(`%c💯 ${firstParam}:`, css, ...otherParams)
})

app.mount('#app')
