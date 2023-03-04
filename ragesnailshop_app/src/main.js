import Vue from 'vue'
import App from './App.vue'

//引入mock插件
// mock用来拦截前端ajax请求，返回我么们自定义的数据用于测试前端接口。
import '@/mock/mockServer'
// 引入swiper
import 'swiper/swiper.css';

// 组成全局组件
// 三级联动组件 -----全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel';
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)

//引入路由配置文件
import router from "@/router"
// Vue.config.productionTip = false
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