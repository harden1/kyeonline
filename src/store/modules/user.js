import * as types from '../mutation-types';

export default {
    state: {
        user: localStorage.getItem("user") || {}
    },
    getters: {},
    mutation: {
        //登录
        [types.LOGIN](state, user) {
            //登录成功后设置状态
            localStorage.setItem("user", user);

            //更新状态
            Object.assign(state.user, user);
        }
    },
    actions: {
        //Action函数接受一个与store实例具有相同方法和属性的content对象，可以使用content.commit(LOGIN)的方式来激发Mutations函数。
        //通过解构出commit，然后直接调用
        [types.LOGIN]({ commit }, user) {
            commit(types.LOGIN, user);
        }
    }
};