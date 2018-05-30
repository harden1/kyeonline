// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from './http/';
import router from './router';

//全局混合
import mixin from "./mixin/";
Vue.mixin(mixin);

/**轮播插件*/
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);

/**表单验证插件 */
import VueValidator from 'vue-validator';
Vue.use(VueValidator);

/**element-ui插件*/
import ElementUI from 'element-ui';
//import { Popover } from "element-ui";
import "../node_modules/element-ui/lib/theme-default/index.css";
Vue.use(ElementUI);

import VueResource from 'vue-resource'
Vue.use(VueResource);

/**Font-Awemose图标*/
import "../node_modules/font-awesome/css/font-awesome.min";

/**Vue-Swiper样式 */
import "../node_modules/swiper/dist/css/swiper.min";

/**全局样式SCSS*/
import './assets/scss/global';


/**百度echarts*/
import Echarts from 'echarts'
Vue.prototype.echarts = element => {
    return Echarts.init(element);
};

/*关闭生产环境提示*/
Vue.config.productionTip = false;


//全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
Vue.filter("chargeFormat", function(value) {   
    var strLen = value.length
    var formatVal = ''
    if(strLen > 3){
        var topHalfStr = value.substring(0, strLen-3)
        var lastHalfStr = value.substring(strLen-3)

        formatVal = topHalfStr + ',' + lastHalfStr
    }else{
        formatVal = value
    }

    return formatVal
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});