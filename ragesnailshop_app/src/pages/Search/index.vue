<template>
  <div>
    <!-- 这是search模块 -->
    <TypeNav></TypeNav>
    <!--selector-->
    <SearchSelector @trademarkInfo="trademarkInfo" @attrInfo="attrInfo" />

    <div class="details clearfix">
      <div class="sui-navbar">
        <div class="navbar-inner filter">
          <ul class="sui-nav">
            <li :class="{ active: isOne }" @click="changeOrder(1)">
              <a href="javascript:;">综合<i class="iconfont" v-show="isOne"
                :class="{'icon-up':isAsc,'icon-down':isDesc}"></i></a>
            </li>
            <li :class="{ active: isTwo }" @click="changeOrder(2)">
              <a href="javascript:;">价格<i v-show="isTwo" class="iconfont"
                :class="{'icon-up':isAsc,'icon-down':isDesc}"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import SearchSelector from './SearchSelector/SearchSelector.vue'
//引入mapGetters
import { mapGetters } from 'vuex'
export default {
  name: "Search",
  components: {
    SearchSelector
  },
  data() {
    return {
      //动态获取searchParams
      searchParams: {
        category1Id: "",//一级分类id
        category2Id: "",//二级分类id
        category3Id: "",//三级分类id
        categoryName: "",
        keyword: "",
        order: "1:desc",
        pageNo: 1,
        pageSize: 10,
        props: [],//平台售卖属性
        trademark: ""//品牌
      },
    }
  },
  //在组件挂在之前动态编辑searchParams的值，因为组件挂在之后会使用到searchParams
  beforeMount() {
    //Object.assign方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
    //Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象
    Object.assign(this.searchParams, this.$route.query, this.$route.params)
  },
  methods: {
    //搜索
    searchInfo() {
      this.$store.dispatch("getSearchListr", this.searchParams)
    },
    //删除分类(query)面包屑
    removeBread() {
      this.searchParams.categoryName = undefined
      this.$router.push({ name: 'Search', params: this.$route.params })
    },
    //删除搜索关键字(params)面包屑
    removeBreadParams() {
      this.searchParams.keyword = undefined
      //通知兄弟组件header删除输入框的keyword关键字
      this.$bus.$emit("clear")
      this.$router.push({ name: 'Search', query: this.$route.query })
    },
    //获取子组件传递的品牌信息（自定义事件）
    tradeMarkInfo(tradeMark) {
      //接口文档中trademark的信息是"ID:品牌名称"形式
      this.searchParams.trademark = `${tradeMark.tmId}:${tradeMark.tmName}`
      this.searchInfo()
    },
    //删除品牌面包屑
    removeTradeMark() {
      this.searchParams.trademark = undefined
      this.searchInfo()
    },
    //获取子组件传递的属性信息（自定义事件）
    attrInfo(attr, attrValue) {
      //searchParams.props元素为字符串形式，api文档有介绍
      let props = `${attr.attrId}:${attrValue}:${attr.attrName}`
      //数组去重
      if (this.searchParams.props.indexOf(props) === -1) {
        this.searchParams.props.push(props)
        this.searchInfo()
      }
    },
    //删除属性面包屑
    removeAttr(index) {
      this.searchParams.props.splice(index, 1)
    }
  },
  mounted() {
    this.searchInfo()
  },
  computed: {
    //使用mapGetters，参数是一个数组，数组的元素对应getters中的函数名
    ...mapGetters(['goodsList']),
    isOne(){
        return this.searchParams.order.indexOf('1')!==-1
      },
      isTwo(){
        return this.searchParams.order.indexOf('2')!==-1
      },
      isDesc(){
        return this.searchParams.order.indexOf('desc')!==-1
      },
      isAsc(){
        return this.searchParams.order.indexOf('asc')!==-1
      },
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
    /*     removeBreadParams() {
          this.searchParams.keyword = undefined
          //通知兄弟组件header删除输入框的keyword关键字
          this.$bus.$emit("clear")
          this.$router.push({ name: 'Search', query: this.$route.query })
        }, */

    removeKeyword() {
      this.searchParams.keyword = undefined;
      this.$router.push({ name: 'search', params: undefined, query: this.$route.query });
      this.getData();
      this.$bus.$emit('clear', 123);
    },

    changeOrder(flag) {
      let originOrder = this.searchParams.order;
      let originflag = this.searchParams.order.split(':')[0];
      let originSort = this.searchParams.order.split(':')[1];
      if (flag == 1) {
        if (originflag != flag) {
          originflag = 1;
          originSort = 'desc';
        } else {
          originSort == 'asc' ? (originSort = 'desc') : (originSort = 'asc');
        }
      } else {
        if (originflag != flag) {
          originflag = 2;
          originSort = 'desc';
        } else {
          originflag = 2;
          originSort == 'asc' ? (originSort = 'desc') : (originSort = 'asc');
        }
      }
      this.searchParams.order = `${originflag}:${originSort}`;
      this.getData();
    },
  }

}
</script>

<style></style>