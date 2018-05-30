<template>
	<div>
		<div class="home-modal-area">
            <div style="height:30px;"></div>
                
            <div class="home-modal-title">
                <div class="modal-title-area">子项目进度<span class="title-unit">(工作量：人天)</span>
                    <div class="home-modal-more" v-on:mouseenter="moreHover" v-on:mouseleave="moreLeave">
                        <div class="eye-icon" :style="eyeIcon"></div>&nbsp;&nbsp;查看详情
                    </div>
                </div>
                <!-- <div class="modal-count-area">
                    <span>任务总数</span>
                    <span>32</span>
                </div>
                <div class="modal-finish-area">
                    <span>已完成</span>
                    <span>150</span>
                </div>
                <div class="modal-delay-area">
                    <span>延迟中</span>
                    <span>5</span>
                </div> -->
                <div class="home-clear"></div>
            </div>

            <div class="home-modal-charts">
                <div class="home-modal-chart-item productDiv">
                    <div class="chart" id="production"></div>

                    <div class="num-div">{{this.childProgress.product}}</div>
                    <div class="num-text">产品</div>
                </div>
                <div class="home-modal-chart-item frameworkDiv">
                    <div class="chart" id="framework"></div>

                    <div class="num-div">{{this.childProgress.framework}}</div>
                    <div class="num-text">架构</div>
                </div>
                <div class="home-modal-chart-item developDiv">
                    <div class="chart" id="develop"></div>

                    <div class="num-div">{{this.childProgress.develop}}</div>
                    <div class="num-text">开发</div>
                </div>
                <div class="home-modal-chart-item testDiv">
                    <div class="chart" id="test"></div>

                    <div class="num-div">{{this.childProgress.test}}</div>
                    <div class="num-text">运维</div>
                </div>
                <div class="home-modal-chart-item bigdataDiv">
                    <div class="chart" id="bigData"></div>

                    <div class="num-div">{{this.childProgress.bigData}}</div>
                    <div class="num-text">大数据</div>
                </div>
                <div class="home-clear"></div>
                <!-- <el-row type="flex" justify="center">
                    <el-col><div class="grid-content bg-purple modal-chart-item">                        
                        <div id="production" class="home-modal-charts-item"></div>
                        <div class="home-modal-present">{{this.childProgress.product}}</div>
                        <div class="home-modal-name">产品</div>
                    </div></el-col>
                    <el-col><div class="grid-content bg-purple modal-chart-item">                       
                        <div id="framework" class="home-modal-charts-item"></div>
                        <div class="home-modal-present">{{this.childProgress.framework}}</div>
                        <div class="home-modal-name">架构</div>
                    </div></el-col>
                    <el-col><div class="grid-content bg-purple modal-chart-item">                       
                        <div id="develop" class="home-modal-charts-item"></div>
                        <div class="home-modal-present">{{this.childProgress.develop}}</div>
                        <div class="home-modal-name">开发</div>
                    </div></el-col>
                    <el-col><div class="grid-content bg-purple modal-chart-item">                        
                        <div id="test" class="home-modal-charts-item"></div>
                        <div class="home-modal-present">{{this.childProgress.test}}</div>
                        <div class="home-modal-name">测试</div>
                    </div></el-col>
                    <el-col><div class="grid-content bg-purple modal-chart-item">
                        <div id="bigData" class="home-modal-charts-item"></div>
                        <div class="home-modal-present">{{this.childProgress.bigData}}</div>
                        <div class="home-modal-name">大数据</div>
                    </div></el-col>
                </el-row> -->
            </div>

        </div>
    </div>
</template>

<script>

export default {
    props: ['childProgress'],
    mounted () {   
        this.homeProductionChartInit()
        this.homeFrameworkChartInit()
        this.homeDevelopChartInit()
        this.homeTestChartInit()
        this.homeBigDataChartInit()
    },
    data(){
        return {
            eyeIcon: {
                backgroundImage: 'url(' + require('../assets/imgs/eye-icon.png') + ')',
            },
            eyeIconNor: {
                backgroundImage: 'url(' + require('../assets/imgs/eye-icon.png') + ')',
            },
            eyeIconSel: {
                backgroundImage: 'url(' + require('../assets/imgs/eye-icon-sel.png') + ')',
            }
        }
    },
    methods: {
        moreHover: function(){
            this.eyeIcon = this.eyeIconSel
        },
        moreLeave: function(){
            this.eyeIcon = this.eyeIconNor
        },
        homeProductionChartInit(){
            var product = this.childProgress.product.replace('%', '')
            // 产品 饼状图
            var myChart = document.getElementById('production')
            this.echarts(myChart).setOption({
                color: ['#64a9ee','#343b52','#58B7FF'],   // 橘黄 灰 绿
                // tooltip: {
                //     trigger: 'item',
                //     formatter: "{a} <br/>{b}: {c} ({d}%)"
                // },
                graphic:{
                    show: false,
                    type:'text',
                    left:'center',
                    top:'center',
                    style:{
                       
                        textAlign:'center',
                        fill:'#000',
                        width:30,
                        height:30
                    }
                },
                series: [
                    {
                        name:'任务进度',
                        type:'pie',
                        hoverAnimation:false,
                        radius: ['0%', '70%'],
                        center : ['50%', '40%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '1',
                                    fontWeight: 'bold',
                                    color: 'white'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:product, name:'产品'},
                            {value:100 - product, name:'剩余'}
                        ],
                        itemStyle :{
                            label :{
                                show: false
                            }
                        }
                    }
                ] 
                //option end
            })
        
        },
        // 产品饼状图 end
        homeFrameworkChartInit(){
            var framework = this.childProgress.framework.replace('%', '')
            // 架构 饼状图
            var myChart = document.getElementById('framework')
            this.echarts(myChart).setOption({
                color: ['#45be89','#343b52','#58B7FF'],   
                // tooltip: {
                //     trigger: 'item',
                //     formatter: "{a} <br/>{b}: {c} ({d}%)"
                // },
                
                series: [
                    {
                        name:'任务进度',
                        hoverAnimation:false,
                        type:'pie',
                        radius: ['0%', '70%'],
                        center : ['50%', '40%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '1',
                                    fontWeight: 'bold',
                                    color: 'white'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:framework, name:'架构'},
                            {value:100-framework, name:'剩余'}
                        ]
                    }
                ] 
                //option end
            })
        
        },
        // 架构饼状图 end
        homeDevelopChartInit(){
            var develop = this.childProgress.develop.replace('%', '')
            // 开发 饼状图
            var myChart = document.getElementById('develop')
            this.echarts(myChart).setOption({
                color: ['#926dde','#343b52','#58B7FF'],   
                // tooltip: {
                //     trigger: 'item',
                //     formatter: "{a} <br/>{b}: {c} ({d}%)"
                // },
                
                series: [
                    {
                        name:'任务进度',
                        type:'pie',
                        hoverAnimation:false,
                        radius: ['0%', '70%'],
                        center : ['50%', '40%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '1',
                                    fontWeight: 'bold',
                                    color: 'white'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:develop, name:'开发'},
                            {value:100-develop, name:'剩余'}
                        ]
                    }
                ] 
                //option end
            })
        
        },
        // 测试饼状图 end
        homeTestChartInit(){
            var test = this.childProgress.test.replace('%', '')
            // 测试 饼状图
            var myChart = document.getElementById('test')
            this.echarts(myChart).setOption({
                color: ['#f2a553','#343b52','#58B7FF'],   
                // tooltip: {
                //     trigger: 'item',
                //     formatter: "{a} <br/>{b}: {c} ({d}%)"
                // },
                
                series: [
                    {
                        name:'任务进度',
                        type:'pie',
                        hoverAnimation:false,
                        radius: ['0%', '70%'],
                        center : ['50%', '40%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '1',
                                    fontWeight: 'bold',
                                    color: 'white'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:test, name:'测试'},
                            {value:100-test, name:'剩余'}
                        ]
                    }
                ] 
                //option end
            })
        
        },
        // 测试饼状图 end
        homeBigDataChartInit(){
            var bigData = this.childProgress.bigData.replace('%', '')
            // 大数据 饼状图
            var myChart = document.getElementById('bigData')
            this.echarts(myChart).setOption({
                color: ['#57c7d3','#343b52','#58B7FF'],   
                // tooltip: {
                //     trigger: 'item',
                //     formatter: "{a} <br/>{b}: {c} ({d}%)"
                // },
                
                series: [
                    {
                        name:'任务进度',
                        type:'pie',
                        hoverAnimation:false,
                        radius: ['0%', '70%'],
                        center : ['50%', '40%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '1',
                                    fontWeight: 'bold',
                                    color: 'white'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:bigData, name:'大数据'},
                            {value:100-bigData, name:'剩余'}
                        ]
                    }
                ] 
                //option end
            })
        
        }
        // 大数据饼状图 end
    }
}
</script>

<style lang="scss" scoped>
   	.home-modal-area, .home-projet-member{
        height: 280px;
    }
    .home-modal-title{
        width: 100%;
        height: 30px;
    }
    .modal-title-area{
        float: left;
        height: 30px;
        width: 100%;
        font-size: 17px;
        font-weight: 700;
        text-align: left;
        padding-left: 30px;
        color: white;
    }
    .modal-count-area{
        float: left;
        height: 30px;
        width: 23%;
        font-size: 15px;
    }
    .modal-finish-area{
        float: left;
        height: 30px;
        width: 23%;
        font-size: 15px;
    }
    .modal-delay-area{
        float: left;
        height: 30px;
        width: 23%;
        font-size: 15px;
    }
    // .modal-chart-item{
    //     // height: 120px;
    //     // width: 166px;
    //     margin-top: 30px;
    //     // border: none;
    //     border-radius: 50%;
    // }
    // .home-modal-charts-item{
    //     height: 100px;
    //     border-radius: 50%;
    // }
    // .home-modal-present{
    //     color: white;
    //     font-size: 18px;
    //     padding-top: 25px;
    //     text-align: center;
    // }
    // .home-modal-name{
    //     color: white;
    //     font-size: 14px;
    //     padding-top: 10px;
    //     text-align: center;
    // }
    .title-unit{
        padding-left: 10px;
        color: #7b85a5;
        font-size: 16px;
    }
    .home-modal-more{
        float: right;
        margin-right: 30px;
        font-size: 16px !important;
        font-weight: 500 !important;
        color: #7b85a5;
    }
    .home-modal-more:hover{
        color: #63a8eb !important;
    }
    .eye-icon{
        width: 16px;
        height: 12px;
        float: left;
        margin-top: 4px;
    }
    .home-modal-charts{
        width: 850px;
        height: 220px;

        .productDiv{
            margin-left: 10px;
            // border: 1px solid grey;
        }
        .num-div{
            position: absolute;
            margin-top: -15px;
            width: 166px;
            height: 30px;
            text-align: center;
            line-height: 25px;
            font-size: 20px;
            color: white;
            // border-bottom: 1px solid green;
        }
        .num-text{
            width: 166px;
            height: 50px;
            text-align: center;
            line-height: 70px;
            font-size: 16px;
            color: white;
            // border-bottom: 1px solid green;
        }
    }
    .home-modal-chart-item{
        width: 166px;
        height: 220px;
        float: left;
        
        .chart{
            
            width: 166px;
            height: 146px;
            margin-top: 20px;

            // border-bottom: 1px solid red;
        }
    }
    #production,#framework,#develop,#test
{
        border-right: 1px solid #282d41;
    }
    
</style>
