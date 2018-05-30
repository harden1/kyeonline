<style lang="scss" scoped>
    .task{
    	width: 100%;
    	height: 100%;
    	color: white;
        border-radius: 5px;
    }
    .total, .title, .complete, .delay{
    	width: 100%;
    	height: 107px;
    	border-bottom: 1px solid #26293c;
    	background-color: #2b3247;
        // border-radius: 5px;
    }
    .title{
        font-size: 18px;
        
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;

    }
     .delay{
         
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;

     }
    .total:hover{
        .text{
            color: #66aae9 !important;
        }
    }
    .complete:hover{
        .text{
            color: #45be89 !important;
        }
    }
    .delay:hover{
        .text{
            color: #45be89 !important;
        }
    }
    .title{
    	height: 69px !important;
    	line-height: 80px;
	    font-size: 17px;
	    font-weight: 700;
	    text-align: left;
	    padding-left: 30px;
    }
    .icon{
    	float: left;
    	// width: 30px;
    	// height: 30px;
    	// background-color: red;
    	margin-top: 40px;
    	margin-left: 30px;
    	background-size: 100% 100%;
    }
    .icon1{
    	// background-image: url('~@imgUrl/total.png');
        width: 22px;
        height: 26px;
    	
    	background-repeat: no-repeat;
    }
    .icon2{
    	// background-image: url(../../assets/imgs/complete.png);
    	// background-size: 80% 80%;
        width: 25px;
        height: 25px;
    	background-repeat: no-repeat;
    }
    .icon3{
    	// background-image: url(../../assets/imgs/delay.png);
    	background-size: 100% 100%;
        width: 17px;
        height: 26px;
    	background-repeat: no-repeat;
    }
    .text{
    	
        float: left;
        height: 30px;
        width: 70px;
        color: #7b85a5;
        margin-top: 37px;
        line-height: 30px;
        margin-left: 20px;
        font-size: 16px;

    }
    .text:nth-child(3){
        padding-left: 5px;
    }
    .task-num{
    	float: left;
    	height: 30px;
    	width: 100px;
    	padding-left: 20px;
    	margin-top: 37px;
    	line-height: 30px;
    	font-size: 26px;
    	text-align: left;
    	font-weight: 100;
    }
    .clear-blank{
    	clear: both;
    }
    .text-delay{
        padding-left: 10px;
    }
    .task-num-padding{
        margin-left: 5px;
    }
</style> 

<template>
    <div class="task">
        <div class="title">任务统计</div>
        <div class="total" v-on:mouseenter="totalHover" v-on:mouseleave="totalLeave">
        	<div class="icon icon1" :style="totalImg"></div>
			<div class="text">任务总数</div>
        	<div class="task-num">{{task.total}}</div>
        	<div class="clear-blank"></div>
        </div>
        <div class="complete" v-on:mouseenter="completeHover" v-on:mouseleave="completeLeave">
        	<div class="icon icon2" :style="completeImg"></div>
        	<div class="text">已完成</div>
        	<div class="task-num">{{task.done}}</div>
        	<div class="clear-blank"></div>
        </div>
        <div class="delay" v-on:mouseenter="delayHover" v-on:mouseleave="delayLeave">
        	<div class="icon icon3" :style="delayImg" ></div>
        	<div class="text text-delay">延迟中</div>
        	<div class="task-num task-num-padding">{{task.delay}}</div>
        	<div class="clear-blank"></div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['task'],
    data(){
        return{
            totalImg: {
                backgroundImage: 'url(' + require('../assets/imgs/total-icon.png') + ')',
            },
            totalImgNor: {
                backgroundImage: 'url(' + require('../assets/imgs/total-icon.png') + ')',
            },
            totalImgSel: {
                backgroundImage: 'url(' + require('../assets/imgs/totle-icon-hover.png') + ')',
            },
            completeImg: {
                backgroundImage: 'url(' + require('../assets/imgs/finish-icon.png') + ')',
            },
            completeImgNor: {
                backgroundImage: 'url(' + require('../assets/imgs/finish-icon.png') + ')',
            },
            completeImgSel: {
                backgroundImage: 'url(' + require('../assets/imgs/finish-icon-hover.png') + ')',
            },
            delayImg: {
                backgroundImage: 'url(' + require('../assets/imgs/delay-icon.png') + ')',
            },
            delayImgNor: {
                backgroundImage: 'url(' + require('../assets/imgs/delay-icon.png') + ')',
            },
            delayImgSel: {
                backgroundImage: 'url(' + require('../assets/imgs/delay-icon-hover.png') + ')',
            }  
        }
    },
    methods: {
        totalHover: function(){
            this.totalImg = this.totalImgSel
        },
        totalLeave: function(){
            this.totalImg = this.totalImgNor
        },
        completeHover: function(){
            this.completeImg = this.completeImgSel
        },
        completeLeave: function(){
            this.completeImg = this.completeImgNor
        },
        delayHover: function(){
            this.delayImg = this.delayImgSel
        },
        delayLeave: function(){
            this.delayImg = this.delayImgNor
        }
    }
}
</script>

