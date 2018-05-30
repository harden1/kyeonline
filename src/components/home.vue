<template>
    <div>
        <template v-if="updateTime">
            <v-home-title-bar v-bind:updateTime="updateTime" @projectState="mongoCtrl"></v-home-title-bar>
        </template>   
      
        <div class="home-content">             
           
            <div class="home-top-half">
               
                    <div class="home-progress">
                        <!-- 项目进度 -->
                        <div class="home-progress-chart-cont" v-on:click="progressClick">
                            <div class="home-Progress-idnetify">
                                <template v-if="projectProgress.real != '0%' ">
                                    <div class="progressing home-Progress-item">
                                        <!-- <div class="point"></div> -->
                                        <div class="text">当前进度</div>
                                        <div class="num">{{projectProgress.real}}</div>
                                        <div class="home-clear"></div>
                                    </div>
                                </template>
                                <template v-if="projectProgress.forward != '0%' ">
                                    <div class="pre-progress home-Progress-item">
                                        <!-- <div class="point"></div> -->
                                        <div class="text">提前进度</div>
                                        <div class="num">{{projectProgress.forward}}</div>
                                        <div class="home-clear"></div>
                                    </div>
                                </template>
                                <template v-if="projectProgress.delay != '0%' ">
                                    <div class="delay-progress home-Progress-item">
                                        <!-- <div class="point"></div> -->
                                        <div class="text">延迟进度</div>
                                        <span>{{projectProgress.delay}}</span>
                                        <div class="home-clear"></div>
                                    </div>
                                </template>
                                
                            </div>
                            <div class="home-progress-chart-title">项目进度<span class="title-unit">(工作量：人天)</span></div>

                            <template v-if="projectProgress.real">
                                <v-home-prog-chart v-bind:progress="projectProgress"></v-home-prog-chart>
                            </template>
                            
                        </div>
                        <div class="home-progress-desc">
                            <div class="home-progress-content">
                                <div class="home-progress-content-scroll" @wheel="mouseScroll($event)">
                                    <template v-if="monthDetail.length > 0">
                                        <template v-for="item in monthDetail">
                                            <template v-if="item.month == chargeMonth">
                                                <div class="home-progress-item home-progress-item-Sel">
                                                    <div class="home-progress-item-month">{{item.month}}</div>
                                                    <div class="home-progress-item-desc">{{item.desc}}</div>
                                                    <div class="home-clear"></div>
                                                </div>  
                                            </template>
                                            <template v-else>
                                                <div class="home-progress-item">
                                                    <div class="home-progress-item-month">{{item.month}}</div>
                                                    <div class="home-progress-item-desc">{{item.desc}}</div>
                                                    <div class="home-clear"></div>
                                                </div>
                                            </template>
                                        </template>                                       
                                    </template> 
                                </div>     
                            </div>
                        </div>
                        <div class="home-clear"></div>
                    </div>
               
                        <!-- 任务统计 -->
                    <div class="task-total" v-on:click="progressClick">
                        <template v-if="task.total">
                            <v-home-task-total v-bind:task="task"></v-home-task-total>
                        </template> 
                    </div>
                   
                    <!-- 阶段目标 -->
                    <div class="home-aim-content">
                        <template v-if="stageAim.thisWeek">
                        <!-- v-on:click="stageClick" -->
                            <v-home-stage-aim v-bind:stageAim="stageAim"></v-home-stage-aim>
                        </template>
                    </div>
                    <div class="home-clear"></div>
                   
            </div>
            
                <div class="home-bottom-half">
                    <div class="finance-chart-content" v-on:click="goFinancePage">  
                        <!-- 财务状况 -->
                        <div class="finance-chart-title">
                            <div class="finance-chart-title-left">财务状况<span class="title-unit">(截止至{{chargeMonth}})</span></div>
                            <div class="finance-chart-title-right">
                                <div class="finance-title-right-num">￥{{totalCharge | chargeFormat }}</div>
                                <div class="finance-title-right-text">总支出</div>
                            </div>

                            <template v-if="financeState.designCharge">
                                <div class="design-total finance-title-chart-item">{{financeState.designCharge.charge | chargeFormat }}</div>
                                <div class="hardware-total finance-title-chart-item">{{financeState.hardwareCharge.charge | chargeFormat }}</div>
                                <div class="yun-total finance-title-chart-item">{{financeState.yunService.charge | chargeFormat }}</div>

                                <div class="home-clear"></div>
                            </template>
                            
                        </div> 
                        <template v-if="financeState.designCharge">
                            <v-finance-chart v-bind:financeState="financeState" :size="{ width:'100%',height:'300px'}" ></v-finance-chart>
                        </template>
                        
                    </div>
               
                    <!-- 子项目进度 -->
                    <div class="child-project-progress" v-on:click="progressClick">
                        <template v-if="childProgress.product">
                            <v-home-modal-progress v-bind:childProgress="childProgress"></v-home-modal-progress>
                        </template> 
                       
                    </div>
                
                    <div class="member-content"  v-on:click="memberClick">
                        <!-- 项目成员 -->
                        <template v-if="member">
                            <v-home-project-member v-bind:member="member"></v-home-project-member>
                        </template>   

                    </div>
                    <div class="home-clear"></div>
                
                </div>
            
        </div>
    </div>
</template>
<script>

    import { FinanceChart, HomeProgressChart, HomeStageAim, 
             HomeModalProgress, HomeProjectMember, HomeTitleBar, 
             HomeTastTotal } from './'
    import { getHomePageData }  from '../http/'

    // import { entiretyData } from './entirety'

    import entiretyData from '../../static/entirety.json'

    export default {  
        name: 'home',  
        components:{
            'v-finance-chart': FinanceChart,
            'v-home-prog-chart': HomeProgressChart,
            'v-home-stage-aim': HomeStageAim,
            'v-home-modal-progress': HomeModalProgress,
            'v-home-project-member': HomeProjectMember,
            'v-home-title-bar': HomeTitleBar,
            'v-home-task-total': HomeTastTotal,
        },
        data(){
            return{
                aimArr: [0,1,2,3,4,5,6],
                projectProgress: {},        //当前进度    
                task: {},                   //任务统计
                member: '',                 //项目成员
                childProgress: {},          //子项目进度
                updateTime: '',             //项目更新时间
                monthDetail: [],            //月度明细
                stageAim: {},               //阶段目标
                financeState: {},           //财务状况
                totalCharge: '',            //总支出
                chargeMonth: '',
                planUrl: 'require(' + '../../static/detailPlan.htm',
                stageUrl: 'require(' + '../../static/stageAim.htm',
              
            }
        },
        mounted () { 
         
            this.getMonth()  
            this.homeNetworkInit()
            
        },
        // filters:{
        //     // 钱数 format
        //     chargeFormat: function(value){
        //         var strLen = value.length
        //         var formatVal = ''
        //         if(strLen > 3){
        //             var topHalfStr = value.substring(0, strLen-3)
        //             var lastHalfStr = value.substring(strLen-3)

        //             formatVal = topHalfStr + ',' + lastHalfStr
        //         }else{
        //             formatVal = value
        //         }

        //         return formatVal
        //     }
        // },
        methods: {
            
            homeNetworkInit(){

                    this.projectProgress = entiretyData.projectProgress                    //项目进度   
                    this.task.total = entiretyData.taskStatistics.taskNum                  //任务统计
                    this.task.done = entiretyData.taskStatistics.done
                    this.task.delay = entiretyData.taskStatistics.delay  
                    this.member = entiretyData.personAnalysis                             //项目成员
                    this.childProgress = entiretyData.childProjectProgress                //子项目进度
                    this.updateTime = entiretyData.projectUpdateTime                      //项目更新时间
                    this.monthDetail = entiretyData.monthDetail                           //月度明细
                    this.stageAim = entiretyData.stageAim                                 //阶段目标
                    this.financeState = entiretyData.expendDetail.totalExpendCategory     //财务状况
                    this.totalCharge = entiretyData.expendDetail.totalExpend
                   


                // this.$http.get('static/entirety.json').then(function(response){
                //     var data = JSON.parse(response.bodyText)
                   
                //     this.projectProgress = data.projectProgress                    //项目进度   
                //     this.task.total = data.taskStatistics.taskNum                  //任务统计
                //     this.task.done = data.taskStatistics.done
                //     this.task.delay = data.taskStatistics.delay  
                //     this.member = data.personAnalysis                             //项目成员
                //     this.childProgress = data.childProjectProgress                //子项目进度
                //     this.updateTime = data.projectUpdateTime                      //项目更新时间
                //     this.monthDetail = data.monthDetail                           //月度明细
                //     this.stageAim = data.stageAim                                 //阶段目标
                //     this.financeState = data.expendDetail.totalExpendCategory     //财务状况
                //     this.totalCharge = data.expendDetail.totalExpend
                    
                // },function(response){
                //     console.log(response);
                // });


                // getHomePageData().then(response => {       

                //     var data = response.data
               
                //     this.projectProgress = data.projectProgress                    //项目进度   
                //     this.task.total = data.taskStatistics.taskNum                  //任务统计
                //     this.task.done = data.taskStatistics.done
                //     this.task.delay = data.taskStatistics.delay  
                //     this.member = data.personAnalysis                             //项目成员
                //     this.childProgress = data.childProjectProgress                //子项目进度
                //     this.updateTime = data.projectUpdateTime                      //项目更新时间
                //     this.monthDetail = data.monthDetail                           //月度明细
                //     this.stageAim = data.stageAim                                 //阶段目标
                //     this.financeState = data.expendDetail.totalExpendCategory     //财务状况
                //     this.totalCharge = data.expendDetail.totalExpend

                // });
            },
            getMonth(){
                var myDate = new Date();
                var month = myDate.getMonth() + 1; 
                this.chargeMonth = month + '月'
                
            },
            progressClick: function(){
                // window.open(this.planUrl)
                window.location = this.planUrl
            },
            stageClick: function(){
                // window.open(this.stageUrl)
                 window.location = this.stageUrl
            },
            mouseScroll: function(e){

                e.stopPropagation()

                // var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;  
                // var mousewheel = isFirefox ? "DOMMouseScroll" : "mousewheel"; 
                // console.log("======" + mousewheel);
                // document.addEventListener(mousewheel, function(event){
                //     console.log("event")
                //     event.stopPropagation();
                // }, false); 
                
            },
            goFinancePage: function(){
                this.$emit('goFinancePage')
            },
            mongoCtrl: function(){
                this.$emit('projectState')
            },
            memberClick: function(){
                 this.$emit('goMemberPage')
            }
            
        }
    }
</script>
<style lang="scss" scoped> 
    .el-row {
        margin-bottom: 10px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        background-color: #2b3247;
    }
    .row-bg {
        background-color: #f9fafc;
    }
    .home-content{
        margin-top: 20px;
        width: 1440px;
        height: 710px;
        margin-left: auto;
        margin-right: auto;
    }
    .home-progress-chart-cont{
        float: left;
        height: 400px;
        width: 50%;
    }
    .home-Progress-idnetify{
        position: absolute;
        width: 125px;
        height: 55px;
        background-color: #2b3247;
        top: 335px;
        left: 240px;
        z-index: 99;

        .progressing .text{
            color: #64a9ee;
        }
        .pre-progress .text{
            color: #45be89;
        }

        .progressing .num{
            font-size: 20px;
            color: white;
            margin-top: 2px;
            margin-left: 10px;
        }
        .pre-progress .num{
            font-size: 20px;
            color: white;
            margin-top: 2px;
            margin-left: 10px;
        }
        
    }
   
    .home-Progress-item div{
        float: left;
    }
    .home-Progress-item .point{
        margin-top: 10px;
        margin-left: 10px;
    }
    .home-Progress-item .text{
        line-height: 27px;
        margin-left: 10px;
        color: white;
        
    font-size: 15px;

    }
    .home-Progress-item .point{
        height: 7px;
        width: 7px;
        border-radius: 50%;
    }
    .progressing .point{
        background-color: #64a9ee;    
    }
    .pre-progress .point{
        background-color: #45be89;
    }
    .delay-progress .point{
        background-color: #f2a553;
    }
    .home-progress-chart-title{
        position: absolute;
        margin-top: 30px;
        margin-left: 30px;
        font-size: 18px;
        font-weight: 700;
        text-align: left;
        color: #ffffff;
    }
    .home-progress-desc{
        float: left;
        height: 400px;
        width: 50%;
    }
    .home-clear{
        clear: both;
    }
    .home-progress-content{
        width: 355px;
        height: 315px;
        margin-top: 12%;
        margin-left: 15px;
        overflow: hidden; 
        // overflow-y: scroll;
    }
    .home-progress-content-scroll{
        width: 105%;
        height: 100%;
        overflow-y: scroll;
    }
    
    .home-progress-content-scroll:hover{
        width: 100% !important;
    }
    // webkit
    .home-progress-content-scroll::-webkit-scrollbar-button {
        background-color:#2b3247;
    }
    .home-progress-content-scroll::-webkit-scrollbar {
        width:5px;
        height:10px;
    }
    .home-progress-content-scroll::-webkit-scrollbar-thumb{
        background:#4f525f;
        border-radius:10px;
    }
    // firefox
    .home-progress-content-scroll::-moz-scrollbar-button {
        background-color:#2b3247;
    }
    .home-progress-content-scroll::-moz-scrollbar {
        width:5px;
        height:10px;
    }
    .home-progress-content-scroll::-moz-scrollbar-thumb{
        background:#4f525f;
        border-radius:10px;
    }
    // ie
    .home-progress-content-scroll::scrollbar-arrow-color {
        background-color:#2b3247;
    }
    // .home-progress-content-scroll::-moz-scrollbar {
    //     width:5px;
    //     height:10px;
    // }
    .home-progress-content-scroll::scrollbar-track-color{
        // background:red;
        border-radius:10px;
    }
    .home-progress-item-Sel{
        background-color:#343b52 !important;
        .home-progress-item-month{
            color: #4f99e1 !important;
        }
    }
    .home-progress-item:hover{
        // background-color:#4a5063 !important;
        border-radius: 5px;
        // .home-progress-item-month{
        //     color: #64a9ee !important;
        // }
        cursor: pointer;
        color: white;
    }
    .home-progress-item{
        // width: 100%;
        // margin-left: auto;
        // margin-right: auto;
        height: 65px;
        width: 334px;
        // border: 1px solid #d7dfe4;
        background-color: #2b3247;
        border-radius: 3px;
        margin-top: 16px;
        color: #6f768b;
    }
    .home-progress-item:nth-child(1){
        margin-top: 5px !important;
    }
    .home-progress-item-month{
        
        float: left;
        width: 45px;
        height: 50%;
        margin-left: 20px;
        margin-top: 18px;
        font-size: 18px;
        font-weight: 700;

    }
    .home-progress-item-desc{
        
        float: left;
        width: 245px;
        height: 50%;
        margin-left: 6px;
        margin-top: 15px;
        font-size: 15px;
        text-align: justify;
        line-height: 20px;
        color: #7b85a5;

    }
    .home-aim-content{
        float: left;
        height: 390px;
        width: 390px;
        margin-left: 20px;
        background-color: #2b3247;
        border-radius: 3px;
    }
    .finance-chart-title{
        position: absolute;
        width: 410px;
        height: 95px;
        z-index: 9;
        color: white;
        // border-bottom: 1px solid red;
    }
    .finance-chart-title-left{
        float: left;
        width: 200px;
        height: 60px;
        padding-left: 30px;
        line-height: 75px;
        font-size: 17px;
        font-weight: 700;
        text-align: left;
    }
    .finance-chart-title-right{
        float: left;
        width: 130px;
        height: 60px;
        margin-left: 75px;
    }
    .finance-title-right-num{
        height: 50%;
        padding-top: 25px;
        padding-left: 30px;
        font-size: 20px;
    }
    .finance-title-right-text{
        height: 50%;
        padding-top: 25px;
        padding-left: 75px;
        color: #5b647f;
        font-size: 14px;
        color: #5b647f;
    }
    .title-unit{
        padding-left: 10px;
        color: #757d97;
        font-size: 16px;
        color: #7b85a5;
    }
    .task-total{
        float: left;
        height: 390px;
        width: 250px;
        color: white;
        margin-left: 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .home-progress{
        float: left;
        width: 760px;
        height: 390px;
        background-color: #2b3247;
        border-radius: 3px;
    }
    .finance-chart-content{
        float: left;
        width: 410px;
        height: 300px;
        margin-top: 20px;
        background-color: #2b3247;
        border-radius: 3px;
    }
    .child-project-progress{
        float: left;
        width: 850px;
        height: 300px;
        margin-top: 20px;
        margin-left: 20px;
        background-color: #2b3247;
        border-radius: 3px;
    }
    .member-content{
        float: left;
        width: 140px;
        height: 300px;
        margin-left: 20px;
        margin-top: 20px;
        background-color: #2b3247;
        border-radius: 3px;
        cursor: pointer;
    }

    // <div class="design-total">169,600</div>
    // <div class="hardware-total">144,420</div>
    // <div class="yun-total">9,715</div>
    .finance-title-chart-item{
        float: left;
        width: 100px;
        height: 30px;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        font-weight: 700;
        margin-top: 15px;
    }
    .design-total{
        margin-left: 75px;      
        color: #63a8eb;
    }
    .hardware-total{
        margin-left: 5px;
        color: #45be89;
    }
    .yun-total{
        margin-left: 15px;      
        color: #f2a553;
    }
</style>