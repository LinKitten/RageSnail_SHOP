// home模块的小仓库
import {reqCategoryList} from '@/api'
// state：仓库存储数据的地方
const state = {
    // state中数据默认初始值别乱写，服务器返回对象，服务器返回数组【根据接口返回值初始化】
    categoryList:[],
};
// mutations:修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
};
// actions：处理actions，可以书写自己的业务逻辑也可以处理异步
const actions = {
    // 通过api里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();

        if (result.code==200) {
            commit('CATEGORYLIST',result.data)
        }
    }
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters,
}