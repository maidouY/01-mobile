// import Vue from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入Vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.min.js'
import '@/assets/css/global.css'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
