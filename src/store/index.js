import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    //开发环境启用严格模式
    strict: process.env.NODE_ENV !== "production",
    modules: {
        User
    }
});