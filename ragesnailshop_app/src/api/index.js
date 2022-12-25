// 当前模块：API进行统一管理
import requests from "./request";

// 三级联动接口 
/* 
    /api/product/getBaseCategoryList
    get 无参数
*/
export const reCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
    // 发请求 :axois发请求返回结果是pormise对象
/*     return requests({ 
        url: '/product/getBaseCategoryList', 
        method:'get',
    }) */


