<style lang="scss" scoped>
    .box{
        width: 300px;
        height: 200px;
        border:solid 1px;
        overflow-y: scroll;
        p{
            margin: 20px;
        }
    }
</style>

<template>
    <div>
        项目进度
        <el-button type="primary" @click="save($event)">发送请求</el-button>
        <div class="box" @mouseover="hover($event)">

            <p>滚动事件阻止测试</p>
            
            <p>滚动事件阻止测试</p>
            
            <p>滚动事件阻止测试</p>
            
            <p>滚动事件阻止测试</p>
            
            <p>滚动事件阻止测试</p>
            
            <p>滚动事件阻止测试</p>
            
            <p>滚动事件阻止测试</p>
            
            <p>滚动事件阻止测试</p>
            
            <p>滚动事件阻止测试</p>
            
            <p>滚动事件阻止测试</p>
            
            <p>滚动事件阻止测试</p>

        </div>
    </div>
</template>
<script>
    import { getHotCitys }  from '../http/';

    export default{
        methods:{
            save(){    
                getHotCitys({ id: '1', name:'邵亮'}).then(response => {       
                    console.log(response);
                });
            },
            hover(e){
                this.stopBubble(e,'mousewheel');
            }
        }
    }
</script>
