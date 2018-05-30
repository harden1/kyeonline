<style lang="scss" scoped>
    @import '../assets/scss/global';
    $spacing:20;
    .box{       
        width           : 258px;
        height          : 317px;
        @extend %relative;
        @extend %position-center;
        @extend %border-radius4;
        background-color: _palette(login,bg);       
    }
    .user-icon{
        text-align: center;
        padding   : #{$spacing*3}px 0;
        i{
            width     : 98px;
            height    : 98px;  
            @extend %inline-block;
            // background: url('../assets/imgs/login-icon_03.png') no-repeat center;
        }
    }
    .input-groug{
        $size:#{$spacing+10}px;
        $pd20:#{$spacing}px;

        width  : 100%;
        bottom : $size;
        padding: 0 $pd20;
        @extend %absolute;
        input{
            width           : 100%;        
            padding         : 12px;
            color           : #fff;
            border          : solid 1px _palette(login,border-bg);
            background-color: _palette(login,bg-dark);
        }
        input::-webkit-input-placeholder{
            color: #fff;
        }     
        :-moz-placeholder {
            /* Mozilla Firefox 4 to 18 */
           color: #fff;
        }
        ::-moz-placeholder {
            /* Mozilla Firefox 19+ */
           color: #fff;
        }
        input:-ms-input-placeholder {
            color: #fff;
        }
        input[type="text"]{
            border-radius: 3px 3px 0 0;
            border-bottom: 0;
        }
        input[type="password"]{
            border-radius: 0 0 3px 3px;
        }
        input[type="submit"]{    
            width: 0;
            height: 0;
            @extend %absolute;
            z-index: -1;   
        }
        
        span{        
            width     : 100%;       
            color     : #ff0000;
            text-align: center;
            padding-bottom : 20px;
            @extend %inline-block;
            @extend %font-size13;
        }
        i{
            bottom: 10px;
            right: 40px;
            color: #959bab;
            cursor:pointer;
            @extend %font-size24;
            @extend %absolute; 
        }
    }
</style>

<template>
    <div class="box" @mouseover="hover">
        <p class="user-icon"><i :style="loginBtn"></i></p>
        <form class="input-groug" @submit.prevent="submit">           
            <span v-show="error">{{ mesg }}</span>     
                    
            <input type="text" placeholder="账号" v-model="form.account"/>
            <input type="password" placeholder="密码" v-model="form.password"/>
            <i class="fa fa-arrow-circle-o-right" @click="submit"></i>
        </form>
    </div>
</template>
<script>
    import { login } from '@http';
    import { loginMsg } from '../components/login-msg'

    export default {
        data(){
            return{
                mesg : '',
                error: false,
                form : {
                    account : '',
                    password: ''
                },
                loginBtn : {
                    backgroundImage: 'url(' + require('../assets/imgs/login-icon_03.png') + ')',
                }
            }
        },
        mounted(){
            const vx = this;
            document.addEventListener('keydown', e =>{
                if(e.keyCode === 13) vx.submit();
            },false)
        },
        methods:{
            submit(){
                if(!this.form.account || !this.form.password){
                    this.error = true;
                    this.mesg = '请输入账号和密码';
                    return;
                }
                if(this.form.account != loginMsg.account || this.form.password != loginMsg.usrPwd){
                    this.error = true;
                    this.mesg = '用户名或密码错误';
                    return;
                }

                // clearInterval(localDataTime)

                sessionStorage.setItem("username", "admin")
                this.$router.push({path:'/home'})

                // var timeLoop = 0
                // var localDataTime = setInterval(function(){
                //     console.log(timeLoop)
                //     timeLoop++ 
                //     if(timeLoop > 60){
                //         localStorage.setItem("username", "")
                //         clearInterval(localDataTime)
                //     }
                // }, 1000)
                
                // //登录
                login(this.form).then(response=>{
                    
                });
            },
            hover(){
                // alert(1);
            }
        }
    }
</script>

