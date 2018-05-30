<style lang="scss" scoped>
    #finance {
        width:95%;
        height: 220px;
        margin-top: 55px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }
</style>
<template>
    <div id="finance">
    </div>
</template>
<script>
export default {
    name: 'FinanceChart',  
    props:['financeState'],
    mounted() {
        
        var container = document.getElementById('finance');
        this.echarts(container).setOption({
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['设计费', '硬件采购', '云服务'],

                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: 'white',
                            fontSize: '15',
                            padding: [8,0,0,0]
                           
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#343b52'
                        }
                    }, 
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitNumber: 4,
                    splitLine: {
                        lineStyle:{
                            color:'#343b52'
                        }
                    },
                    axisLabel: {
                        show: true,

                        textStyle: {
                            color: '#7b85a5'
                        }
                    },
                    axisLine:{
                        show: false,
                        lineStyle:{
                            color:'#2b3247'
                        }
                    } 
                }
            ],
            series : [
                {
                    // name:'直接访问',
                    type:'bar',
                    barWidth: '20%',
                    barCategoryGap: '10px',
                    labelLine:{
                        normal:{show: false}
                    },
                    data:[
                            {value: this.financeState.designCharge.charge, itemStyle:{normal:{color:'#63a8eb'}}}, 
                            {value: this.financeState.hardwareCharge.charge, itemStyle:{normal:{color:'#45be89'}}}, 
                            {value: this.financeState.yunService.charge, itemStyle:{normal:{color:'#f2a553'}}}
                        ]
                }
            ]

            // option end
        })
    }
}
</script>
