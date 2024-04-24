import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import FontAwesomeIcon from "@/plugins/fontawesome";

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
  
}
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router).mount('#app')
