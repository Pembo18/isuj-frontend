import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import router from './router'
import  Toast  from 'vue-toastification'
import 'vue-toastification/dist/index.css'


const app = createApp(App)
app.use(Toast, {
    timeout: 2500,
    position: 'top-center'
})
app.use(router)
app.mount('#app')
