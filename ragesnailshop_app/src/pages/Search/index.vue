<template>
  <div>
    <!-- 这是search模块 -->
    <TypeNav></TypeNav>
  </div>
</template>

<script>
 //引入mapGetters
 import {mapGetters} from 'vuex'
export default {
    name:"Search",
    computed:{
      //使用mapGetters，参数是一个数组，数组的元素对应getters中的函数名
      ...mapGetters(['goodsList'])
    },
  
}
</script>

<style> 

</style>