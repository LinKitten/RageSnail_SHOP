<template>
    <!-- 头部 -->
    <header class="header">
        <!-- 头部的第一行 -->
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>尚品汇欢迎您！</p>
                    <p>
                        <span>请</span>
                        <!-- 声明式导航 务必要有to属性 -->
                        <router-link to="/login">登录</router-link>
                        <router-link to="/register" class="register">免费注册</router-link>
                    </p>
                </div>
                <div class="typeList">
                    <a href="###">我的订单</a>
                    <a href="###">我的购物车</a>
                    <a href="###">我的尚品汇</a>
                    <a href="###">尚品汇会员</a>
                    <a href="###">企业采购</a>
                    <a href="###">关注尚品汇</a>
                    <a href="###">合作招商</a>
                    <a href="###">商家后台</a>
                </div>
            </div>
        </div>
        <!--头部第二行 搜索区域-->
        <div class="bottom">
            <h1 class="logoArea">
                <router-link class="logo" to="/home">
                    <img src="../../assets/images/logo.png" alt="" />
                </router-link>
            </h1>
            <div class="searchArea">
                <form action="###" class="searchForm">
                    <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" />
                    <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
                        搜索
                    </button>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Headers",
    data() {
        return {
            keyword: "",
        };
    },
    methods: {
        // 搜索按钮的回调函数： 需要像search路由进行跳转
        goSearch() {
            //#region 
            // 路由传递参数：
            // 第一种方法：字符串形式
            //   this.$router.push("/search/"+this.keyword+"?k="+this.keyword.toUpperCase());
            // 第二种方法：模板字符串的方法
            // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
            // 第三种写法：对象
            /*  this.$router.push({
                 name: "search",
                 params: {keyword: this.keyword,},
                 query: {k: this.keyword.toUpperCase(),}
             }); */

            /* ------------------------------------------------------------------------------------------------------------------------------- */
            /* 面试题1：路由传递参数（对象写法）path是否可以结合params参数一起使用? 

                答：路由跳转传参的时候，对象的写法可是name、path形式，但是需要注意的是：path这种写法不能和params参数一起使用
            
            */
            /* this.$router.push({
                path: "/search",
                params: {keyword: this.keyword,},
                query: {k: this.keyword.toUpperCase(),}
            }) */

            /* 面试题2：如何指定params参数可传可不传？ 

                答：如果路由要求传递params参数，但是我们就不传递params参数，URL就会哟问题

                面试题目：2.2 如何指定params参数可以传递，或者可以不传递？

                答:在配置路由的时候，在占位的后面加上一个问号【params可传可不传】
            */
            /*  this.$router.push({
                 name: "search",
                 query: {k: this.keyword.toUpperCase(),}
             }) */

            /* 面试题3：params参数可以传递也可以不传递，但是如果传递是空串，如何解决？

                答：使用undefined解决：可以传递也可以不传递（空的字符串）
            
            */
            /* this.$router.push({
                 name:"search",
                 params:{keyword:''|| undefined},
                 query:{k:this.keyword.toUpperCase(),}
            }) */
            //#endregion

            /*面试题4： 路由组件能不能传递props数据？
            
                 答：可以的，有三种写法
             */
            this.$router.push({
                name: "search",
                params: { keyword: this.keyword, },
                query: { k: this.keyword.toUpperCase(), }
            }
           );
           console.log(this.$router);
        },
    },
    mounted() {
  //  组件挂载时就监听clear事件，clear事件在search模块中定义
  //  当删除关键字面包屑时，触发该事件，同时header的输入框绑定的keyword要删除
    this.$bus.$on("clear",()=>{
      this.keyword = ''
    })
  },

};
</script>

<style lang="less" scoped>
.header {
    &>.top {
        background-color: #eaeaea;
        height: 30px;
        line-height: 30px;

        .container {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .loginList {
                float: left;

                p {
                    float: left;
                    margin-right: 10px;

                    .register {
                        border-left: 1px solid #b3aeae;
                        padding: 0 5px;
                        margin-left: 5px;
                    }
                }
            }

            .typeList {
                float: right;

                a {
                    padding: 0 10px;

                    &+a {
                        border-left: 1px solid #b3aeae;
                    }
                }
            }
        }
    }

    &>.bottom {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;

        .logoArea {
            float: left;

            .logo {
                img {
                    width: 175px;
                    margin: 25px 45px;
                }
            }
        }

        .searchArea {
            float: right;
            margin-top: 35px;

            .searchForm {
                overflow: hidden;

                input {
                    box-sizing: border-box;
                    width: 490px;
                    height: 32px;
                    padding: 0px 4px;
                    border: 2px solid #f9782a;
                    float: left;

                    &:focus {
                        outline: none;
                    }
                }

                button {
                    height: 32px;
                    width: 68px;
                    background-color: #f9782a;
                    border: none;
                    color: #fff;
                    float: left;
                    cursor: pointer;

                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>