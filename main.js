import App from './App'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
  import uviewPlus from '@/uni_modules/uview-plus'
  import Tababr from './components/Tabbar/Tabbar.vue'
export function createApp() {
  const app = createSSRApp(App)
  import('/request/index.js')
//全局注册导航栏
    app.component('Tabbar',Tababr)
    app.use(uviewPlus)
  return {
    app
  }
}
// #endif