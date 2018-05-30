<style lang="scss" scoped>
    #totleChargeChart{
		width: 100%;
		height: 100%;
		border-right: 1px solid #282d41;
	}
	
	
</style>

<template>	
    <div id="totleChargeChart"></div>

</template>

<script>

export default {
	name: 'FinanceTotalChart',
	props: ['chargeDetail'],
    mounted () {   
        this.totleChartInit()
    },
    methods: {
    	totleChartInit(){
    		
    		var totalChargeChart = document.getElementById('totleChargeChart')

    		this.echarts(totalChargeChart).setOption({
    			color: ['#64a9ee','#45be89','#f2a553'],    // 蓝 绿 黄
       //          tooltip : {
			    //     trigger: 'item',
			    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
			    // },
			    calculable : true,
			    
			    // series : [
			    //     {
			    //         name:'支出类项',
			    //         type:'pie',
			    //         hoverAnimation:false,
			    //         radius : [70, 110],
			    //         center : ['45%', '55%'],
			    //         roseType : 'radius',
			    //         label: {
			    //             normal: {
			    //                 show: false
			    //             }
			    //         },
			    //         lableLine: {
			    //             normal: {
			    //                 show: false
			    //             }
			    //         },
			    //         data:[
			    //             {value:this.chargeDetail.designCharge.persent.replace('%', ''), name:'设计费'},
			    //             {value:this.chargeDetail.hardwareCharge.persent.replace('%', ''), name:'硬件采购'},
			    //             {value:this.chargeDetail.yunService.persent.replace('%', ''), name:'云服务'}
			    //         ]
			    //     }
			    // ]

			    series: [
			        {
			            name:'',
			            type:'pie',
			            radius: ['50%', '80%'],
			            center : ['45%', '55%'],
			            hoverAnimation:false,
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center',
			                    formatter: '{d}'
			                },
			                emphasis: {
			                    show: false,
			                    textStyle: {
			                        fontSize: '15',
			                        fontWeight: 'bold',
			                        color: 'white'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: true
			                }
			            },
			            data:[
			                {value: this.chargeDetail.designCharge.persent.replace('%', ''), name:'设计费'},
			                {value: this.chargeDetail.hardwareCharge.persent.replace('%', ''), name:'硬件采购'},
			                {value: this.chargeDetail.yunService.persent.replace('%', ''), name:'云服务'}

			            ]
			        }
			    ] 
			    // option end
            })
    		
    	}
    	// end
    }
}
</script>
