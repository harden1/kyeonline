<template>
	<div>
	    <div style="height:30px;"></div>
	    <div class="home-aim-bar">
	        <div class="home-aim-bar-title">阶段目标</div>
	        <div class="home-aim-bar-date">
	            <div class="date-btn" v-on:click="nextWeekClick" v-bind:class="{btnActive: isBtnSelectArr[2]}">下周</div>
	            <div class="date-btn" v-on:click="thisWeekClick" v-bind:class="{btnActive: isBtnSelectArr[1]}">本周</div>
	            <div class="date-btn" v-on:click="preWeekClick" v-bind:class="{btnActive: isBtnSelectArr[0]}">上周</div>
	            <div class="home-clear"></div>
	        </div>
	        <div class="home-clear"></div>
	    </div>
        <!-- v-on:click="stageClick" -->
	    <div class="home-aim-item-area">
            <div class="home-aim-item-scroll" @wheel="mouseScroll($event)">
    	        <div class="home-aim-item" v-for="item in aimArr">
    	            <div class="home-aim-item-left">
    	                <div class="home-aim-left-point"></div>
    	            </div>
    	            <div class="home-aim-item-right">
                        <div class="aim-item-text">{{item.desc}}</div>
    	            </div>
                    <template v-if="item.state == '进行中'">
                        <div class="home-ain-item-state">{{item.state}}</div>
                    </template>
                    <template v-else-if="item.state == '延迟中'">
                        <div class="home-ain-item-state color-yellow">{{item.state}}</div>
                    </template>
                     <template v-else-if="item.state == '已完成'">
                        <div class="home-ain-item-state color-green">{{item.state}}</div>
                    </template>
                     <template v-else-if="item.state == '待启动'">
                        <div class="home-ain-item-state color-grey">{{item.state}}</div>
                    </template>
                    
    	            <div class="home-clear"></div>
    	        </div>
	        </div>
	    </div>

    </div>
</template>

<script>

export default {
    props: ['stageAim'],
    data(){
	    return{
	    	aimArr: [],
	        isBtnSelectArr: [true, false, false],
            stageUrl: 'require(' + '../../static/stageAim.htm',      
	    }
	},
    mounted () {   
        this.thisWeekClick()
    },
	methods: {
	    nextWeekClick: function(){
	        // 下周
	        this.isBtnSelectArr = [false, false, true] 
            this.aimArr = this.stageAim.nextWeek
	    },
	    thisWeekClick: function(){
	        // 本周
	        this.isBtnSelectArr = [false, true, false] 
            this.aimArr = this.stageAim.thisWeek
	    },
	    preWeekClick: function(){
	        // 上周
	        this.isBtnSelectArr = [true, false, false] 
            this.aimArr = this.stageAim.perWeek
	    },
        mouseScroll: function(e){

            e.stopPropagation()
            
        },
        stageClick: function() {
            // window.open(this.stageUrl)
             window.location = this.stageUrl
        },
	}
}
</script>

<style lang="scss" scoped>
	
    .home-aim-bar{
        width: 90%;
        height: 6%;
        margin-left: 5%;
    }
    .home-aim-bar-title{
        width: 40%;
        height: 100%;
        float: left;
        line-height: 25px;
        text-align: left;
        font-size: 18px;
        font-weight: 700;
        color: white;
        padding-left: 10px;
    }
    .home-aim-bar-date{
        width: 60%;
        height: 100%;
        float: left;
    }
    .date-btn{
        width: 56px;
        float: right;
        margin-right: 10px;
        height: 28px;
        background-color: #343b52;
        line-height: 28px;
        border-radius: 15px;
        font-size: 15px;
        color: #a9acae;
        cursor: pointer;
        text-align: center;
        
font-weight: lighter;

    }
    .home-aim-item-area{
        width: 360px;
        margin-left: 30px;
        height: 300px;
        margin-top: 5%;
        overflow: hidden;
    }
    .home-aim-item-scroll{
        width: 110%;
        height: 100%;
        overflow-y: scroll; 
    }
    .home-aim-item-scroll:hover{
        width: 100% !important;
        cursor: pointer;
    }
    // webkit
    .home-aim-item-scroll::-webkit-scrollbar-button {
        background-color:#2b3247;
    }
    .home-aim-item-scroll::-webkit-scrollbar {
        width:5px;
        height:10px;
    }
    .home-aim-item-scroll::-webkit-scrollbar-thumb{
        background:#4f525f;
        border-radius:10px;
    }

    .home-aim-item-area::-webkit-scrollbar {
        display:none
    }
    .home-aim-item{
        height: 50px;
        width: 340px;
        margin-top: 10px;
    }
    .home-aim-item-left{
        float: left;
        width: 20px;
        height: 40px;
    }
    .home-aim-item-right{
        float: left;
        width: 240px;
        height: 40px;
        color: #6f768b;
        text-align: left;
    }
    .home-aim-right-date, .home-aim-right-desc{
        width: 100%;
        height: 50%;
        font-size: 10px;
        padding-top: 5px;
        text-align: left;
    }
    .home-aim-left-point{
        width: 7px;
        height: 7px;
        background-color: #6f768b;
        margin-top: 11px;
        // margin-left: 25px;
        border-radius: 50%;
    }
    .home-clear{
        clear: both;
    }
    .btnActive{
        background-color: #66aae9 !important;
        color: white !important;
    }
    .aim-item-text{
        font-size: 15px;
        color: #7b85a5 !important;
        text-align: justify;
        line-height: 25px;
    }
    .home-ain-item-state{
        float: left;
        width: 55px;
        height: 40px;
        margin-left: 24px;
        color: #63a8eb;
    }
    .color-yellow{
        color: #f2a553 !important;
    }
    .color-green{
        color: #45be89 !important;
    }
    .color-grey{
        color: #7b85a5;
    }
</style>
