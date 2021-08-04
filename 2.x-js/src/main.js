import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store, // 在根实例中注册 store 所有的组件都可使用
  render: h => h(App)
}).$mount('#app')
