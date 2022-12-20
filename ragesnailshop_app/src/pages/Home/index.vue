<template>
  <div>
    <!--三级联动全局组件 （在main.js注册为全局组件，因此不用引入） -->
    <!-- 商品分类导航 -->
    <TypeNav/>

    <!-- 列表 -->
    <ListContainer />
    <!-- 今日推荐 -->
    <Recommend />
    <!-- 商品排行 -->
    <Rank/>

  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from "@/pages/Home/ListContainer"
import Recommend from "@/pages/Home/Recommend"
import Rank from "@/pages/Home/Rank"
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
  }
}
</script>

<style>

</style>