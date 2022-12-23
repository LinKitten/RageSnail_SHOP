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
    <!--猜你喜欢 -->
    <Like/>
    <!-- 楼层 -->
    <Floor/>
    <Floor/>
    <!-- 商标 -->
    <Brand/>

  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from "@/pages/Home/ListContainer"
import Recommend from "@/pages/Home/Recommend"
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brand from "@/pages/Home/Brand"

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  }
}
</script>

<style>

</style>