# DAY1

1.关闭eslint校验工具
创建vue.config.js文件：需要对外暴露

1.1src文件夹的别名的设置
因为项目大的时候src（源代码文件夹）：里面目录会很多，找文件不方便，设置src文件夹的别名的好处，找文件会方便一些
创建jsconfig.json文件

```json
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "src/*"
            ]
        }
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```



2.**路由的配置(vue-router)**



路由分为KV

> node平台（并非语言）
> 对于后台而言:K即为URL地址   V即为相应的中间件

前端路由:
	K即为URL（网络资源定位符）: V即为相应的路由组件

2.1 配置路由

​	项目当中配置的路由一般放置在:file_folder: router文件夹中

安装路由
	 `cnpm install --save vue-router` 

2.3总结

​	**路由组件与非路由组件的区别**

​	(1) :file_folder:components 经常放置的非路由组件（共用全局组件）

​		:file_folder:page/views 经常放置路由组件

​	(2)路由组件一般放置在:file_folder: router文件夹中进行注册(使用的即为组件的名称) 

​		非路由组件在使用的时候，一般都是以标签的形式使用的

​	(3)注册完路由，不管路由组件还是非路由组件身上都有\$route、\$router属性

​	\$route ：一般获取路由信息【路径、query 、 params等等】

​	\$router ： 一般进行编程式导航进行路由跳转 【push | replace】

2.4 路由的跳转
路由的跳转就两种形式：

- 声明式导航router-link ：可以进行路由跳转（务必要有to属性）

- 编程式导航push||replace 可以进行路由跳转

编程式导航更好用：因为可以书写自己的业务逻辑



> **面试题：v-show与v-if区别?**

v-show:通过样式display控制
v-if：通过元素上树与下树进行操作
面试题:开发项目的时候，优化手段有哪些?
1:v-show|v-if
2:按需加载
8)首页|搜索底部是有Footer组件，而登录注册是没有Footer组件
Footer组件显示|隐藏，选择v-show|v-if
路由元信息



9）路由传参
params参数：路由需要占位，程序就崩了，属于URL当中一部分
query参数：路由不需要占位，写法类似于ajax当中query参数

**路由传递参数先关面试题**

> 1**:路由传递参数（对象写法）path是否可以结合params参数一起使用?**

​     不可以：不能这样书写，程序会崩掉

> **2:如何指定params参数可传可不传?** 

​     比如：配置路由的时候，占位了（params参数），但是路由跳转的时候就不传递了。路径会出现问题：

http://localhost:8080/#/?k=ABC

http://localhost:8080/#/search?k=ABC

> **3:params参数可以传递也可以不传递，但是如果传递是空串，如何解决？**

如果指定name与params配置, 但params中数据是一个"", 无法跳转，路径会出问题，使用undefined解决：可以传递也可以不传递（空的字符串） 

`params:{keyword:''|| undefined},`



> ​     **5: 路由组件能不能传递props数据?**

可以，一共有三种写法：

// 1：布尔值写法:params

​      /* props:true */

​      // 2：对象写法  额外的给路由组件传递一些props

​      /* props:{a:1,b:"ppppp"} */

​      // 3: 函数 可以params参数、query参数，通过props传递给路由组件

​      porps: ($route) => ({

​          keyword: $route.params.keyword,

​          k: $route.query.k,

​      })
   **6: call||apply区别**

           相同点：都可以调用函数一次，都可以篡改函数的上下文一次
           不同点: call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组

3.1 vuex是什么

vuex是官方提供一个插件，状态管理库，集中式管理项目中组件共用的数据.
(切记：并不是全部项目都需要vuex，)













​     
​    

