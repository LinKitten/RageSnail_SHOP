import Vue from 'vue'
import App from './App.vue'
//引入路由配置文件
import router from "@/router"
// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由
  //当这里书写router的时候，组件身上都拥有了$route,$router属性 
  router,
}).$mount('#app')