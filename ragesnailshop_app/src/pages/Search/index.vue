<template>
  <div>
    <!-- 这是search模块 -->
    <TypeNav></TypeNav>
  </div>
</template>

<script>
//引入mapGetters
import { mapGetters } from 'vuex'
export default {
  name: "Search",
  computed: {
    //使用mapGetters，参数是一个数组，数组的元素对应getters中的函数名
    ...mapGetters(['goodsList'])
  },
  watch: {
    $route(newValue, oldValue) {
      Object.assign(this.searchParams, this.$route.query, this.$route.params)
      this.searchInfo()
      //如果下一次搜索时只有params参数，拷贝后会发现searchParams会保留上一次的query参数
      //所以每次请求结束后将相应参数制空
      this.searchParams.category1Id = '';
      this.searchParams.category2Id = '';
      this.searchParams.category3Id = '';
      this.$route.params.keyword = '';
    }
  },
  methods: {
    //删除搜索关键字
    removeBreadParams() {
      this.searchParams.keyword = undefined
      //通知兄弟组件header删除输入框的keyword关键字
      this.$bus.$emit("clear")
      this.$router.push({ name: 'Search', query: this.$route.query })
    },
    /*
     removeKeyword() {
    this.searchParams.keyword = undefined;
    this.$router.push({ name: 'search', params: undefined, query: this.$route.query });
    this.getData();
    this.$bus.$emit('clear', 123);
  }, 
     */

  },

}
</script>

<style></style>