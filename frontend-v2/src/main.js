import { createApp } from 'vue'
import App from './App.vue'
import router from '@/utils/router'

// Vue Router 拦截器
import '@/utils/router/permission'

const app = createApp(App)

app.use(router)
  .mount('#app')
