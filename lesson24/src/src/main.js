import { createApp } from 'vue'
import App from './App.vue'
import LikeNumber from './LikeNumber.vue'

const app = createApp(App)
app.component('LikeNumber', LikeNumber)
app.mount('#app')
