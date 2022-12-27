import Vue from 'vue'
import App from './App.vue'

// 组成全局组件
// 三级联动组件 -----全局组件
import TypeNav from '@/pages/Home/TypeNav'
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)

//引入路由配置文件
import router from "@/router"
// Vue.config.productionTip = false

// 测试api
import {reCategoryList} from "@/api";
reCategoryList();

// 引入仓库
import store from '@/store'
new Vue({
  render: h => h(App),
  //注册路由
  //当这里书写router的时候，组件身上都拥有了$route,$router属性 
  router,
  // 注册仓库
  store
}).$mount('#app')