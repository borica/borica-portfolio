import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import { i18nSetup } from '@/locales/setup/i18nSetup'

const app = createApp(App)
registerPlugins(app)

app.use(i18nSetup())
  .mount('#app')
