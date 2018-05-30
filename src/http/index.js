import axios from './config';

var path = require('path')
//通用配置
const fetch = (config) => {

    //默认配置
    var setting = {
        url: '',
        params: {},
        method: 'get',
        timeout: 5000,
        // baseURL: '/api'
    }

    //覆盖默认配置
    Object.assign(setting, config);

    return new Promise((resolve, reject) => {
        axios(setting).then(response => {
            resolve(response);
        });
        //此处异常在响应拦截器内处理
    })

}

//获取热门城市-测试
const getHotCitys = (params) => {
    //var url = "/movie/in_theaters";
    var url = "/help.json";
    var url = "/getHotCitysJsonp";
    return fetch({ url });
}

//获取home页数据
const getHomePageData = (params) => {

    var staticSrc = path.resolve(__dirname, '../static')
    var url = staticSrc + '/entirety.json';
    return fetch({ url });
}

//获取member页数据
const getMemberPageData = (params) => {

    var staticSrc = path.resolve(__dirname, '../static')
    
    var url = staticSrc + '/tissue.json';
    return fetch({ url });
}

const login = (params) => {
    // alert([params.account, params.password]);

    var url = "/#/1";
    return fetch({ url });
}

export { getHotCitys, login, getHomePageData, getMemberPageData };