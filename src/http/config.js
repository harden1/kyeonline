import axios from 'axios';
import Vue from 'vue';
import { Loading } from 'element-ui';

//加载中动画
let loading;

//请求拦截器
axios.interceptors.request.use(
    config => {
        //发起请求前的逻辑处理,如配置请求header
        //config.headers.Authorization = "允许请求";

        //加载中动画
        loading = Loading.service({
            fullscreen: true,
            lock: true,
            text: "加载中...",
            customClass: "loading"
        });

        return config;
    }, error => {
        return Promise.reject(error);
    }
);

//响应拦截器
axios.interceptors.response.use(
    response => {
        //响应请求后逻辑处理
        loading.close();

        return response;
    }, error => {
        loading.close();

        const resp = error.response;
        if (resp) {
            switch (resp.status) {
                case 401: //未经授权登录
                    console.log(resp.status);
                    break;

                case 403: //服务器拒绝响应
                    console.log(resp.status);
                    break;

                case 404: //请求页面不存在
                case 500: //无网络
                    console.log(resp.status);
                    break;

                default:
                    //其他...
                    console.log("其他请求错误");
            }
        }

        return Promise.reject(error);
    }
);


export default axios;