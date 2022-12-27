// vuex的管理文件

import Vue  from "vue";
import Vuex from "vuex";

// 需要使用插件一次
Vue.use(Vuex);
// state：仓库存储数据的地方
const state ={};
// mutations:修改state的唯一手段
const mutations = {};
// actions：处理actions，可以书写自己的业务逻辑也可以处理异步
const actions ={};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
const getters = {};

// 对外暴露store类的一个实例
export default new Vuex.Store({
        state,
        mutations,
        actions,
        getters,
    
})