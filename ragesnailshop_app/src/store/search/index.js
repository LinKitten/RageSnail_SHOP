import {reqGetSearchInfo} from '@/api';
// search模块的小仓库
// state：仓库存储数据的地方
const state = {
    searchList:{},
};
// mutations:修改state的唯一手段
const mutations = {
    SEARCHLIST(state,searchList){
        state.searchList = searchList
    }
};
// actions：处理actions，可以书写自己的业务逻辑也可以处理异步
const actions = {
     //第二个参数data默认是一个空对象
     async getSearchListr({commit},data={}){
        let result = await reqGetSearchInfo(data)

        if(result.code === 200){
            commit("SEARCHLIST",result.data)
        }
    }
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更方便
const getters = {
    goodsList(state){
        //网络出现故障时应该将返回值设置为空
        return state.searchList.goodsList||[]
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
}