// 配置路由的文件
import Vue from "vue";
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 配置路由
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: "/home",
            component: Home,
            meta: {
                show: true
            },
        },
        {
            path: "/search/:keyword?",//在配置路由的时候，在占位的后面加上一个问号【params可传可不传】
            component: Search,
            name: 'search',
            meta: {
                show: true
            },
            // 路由组件能不能传递props数据？
            // 1：布尔值写法:params
            /* props:true */
            // 2：对象写法  额外的给路由组件传递一些props
            /* props:{a:1,b:"ppppp"} */
            // 3: 函数 可以params参数、query参数，通过props传递给路由组件
            porps: ($route) => ({
                    keyword: $route.params.keyword,
                    k: $route.query.k,
            })
        },
        {
            path: "/login",
            component: Login,
            meta: {
                show: false
            },
        },
        {
            path: "/register",
            component: Register,
            meta: {
                show: false
            },
        },
        // 重定向 在项目跑起来的时候，访问 / ,定向到首页
        {
            path: "*",
            redirect: "/home"
        },
    ]
})
