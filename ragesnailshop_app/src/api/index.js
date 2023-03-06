// 当前模块：API进行统一管理
import requests from "./request";
import mockRequests from './mockAjax';

// 三级联动接口 
/* 
    /api/product/getBaseCategoryList
    get 无参数
*/
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });
    // 发请求 :axois发请求返回结果是pormise对象
/*     return requests({ 
        url: '/product/getBaseCategoryList', 
        method:'get',
    }) */

// export const reqGetBannerList = () => requests({ url: '/product/getBaseBannerList', method: 'get' });
export const reqGetBannerList = () => mockRequests.get('/banner');

// 获取搜索模块数据
export const reqGetSearchInfo = (params) =>
  requests({ url: '/list', method: 'post', data: params || {} });

