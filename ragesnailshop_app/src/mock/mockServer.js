import Mock from 'mockjs'
//webpack默认对外暴露：json、图片
// 导入两个json文件【JSON数据格式不需要对外暴露，但是可以引入】
import banner from './banner.json'
import floor from './floor.json'

//mock数据：第一个参数请求地址、第二个参：请求数据
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})

