// import Vue from 'vue'
import Vue from 'vue'
import App from './App.vue'

// 导入插件文件
import MyPlugin from './MyPlugin.js'
// 注册插件
Vue.use(MyPlugin) // 本质：执行install方法而已

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
