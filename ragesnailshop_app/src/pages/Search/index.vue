<template>
  <div>
    <h1>param参数 {{this.keyword}},a:{{this.a}},b：{{this.b}}</h1>
    <h1>query参数 {{$route.query.k}}</h1>
  </div>
</template>

<script>
export default {
    name:"Search",
    // 路由组件可以传递prop
    props:['keyword','a','b']
}
</script>

<style> 

</style>