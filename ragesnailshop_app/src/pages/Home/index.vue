<template>
  <div>
    <!--三级联动全局组件 （在main.js注册为全局组件，因此不用引入） -->
    <TypeNav></TypeNav>
    <ListContainer/>
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from "@/pages/Home/ListContainer"
export default {    
    name:"Home",
    components:{
      ListContainer
    }
}
</script>

<style>

</style>