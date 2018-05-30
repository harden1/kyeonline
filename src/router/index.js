import Vue from 'vue';
import Router from 'vue-router';
import Home from '@view/home';
import Login from '@view/login';

Vue.use(Router);


//主路由
const routes = [
    // {
    //     path: "/home",
    //     // name: "login",
    //     // component: Login

    //     name: "home",
    //     component: Home
    // },
    {
        path: "/",
        name: "home",
        component: Home

        // name: "login",
        // component: Login
    }
];

const router = new Router({ routes });


// 判断是否需要登录状态
router.beforeEach((to, from, next) => {

    // if (sessionStorage.getItem("username") || to.path === '/') { // 判断是否需要登录权限
    //         if(sessionStorage.getItem("username") && to.path === '/'){
    //             next({
    //                 path: '/home'
    //             })
    //         }else{
               next() 
    //         }
                    
    // } else {
    //     next({
    //         path: '/'
    //         // query: { redirect: to.fullPath }
    //     })
    // }
});


export default router;