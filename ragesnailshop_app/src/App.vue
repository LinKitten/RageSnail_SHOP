<template>
    <div>
        <Headers></Headers>
        <!-- 路由组件的出口文件 -->
        <router-view></router-view>
        <!-- 在Home、Search显示的，在登录、注册隐藏 -->
        <Footers v-show="$route.meta.show"></Footers>
    </div>
</template>

<script>
import Headers from "./components/Header"
import Footers from "./components/Footer"
export default {
    name:"App",
    components:{
        Headers,
        Footers,
    },
    mounted(){
          //派发一个action|| 通知Vuex发请求，获取三级分类的数据，存储于仓库当中
          this.$store.dispatch('categoryList');
    }
}
</script>

<style>
  
</style>