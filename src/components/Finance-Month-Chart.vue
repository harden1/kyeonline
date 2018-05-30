<style lang="scss" scoped>
    #monthChart{
		width:580px;
		height: 100%;
		margin-left: 13px;
	}
</style>

<template>
    <div id="monthChart"></div>
</template>

<script>

export default {
	name: 'FinanceMonthChart',
	props: ['financeState'],
    mounted () {   
        this.monthChartsInit()
        // this.doNetWork()
    },
    methods: {
      	monthChartsInit(){

        	var myChart = document.getElementById('monthChart')
        	this.echarts(myChart).setOption({
                // title: { text: 'echarts' },
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
			            data : ['08', '09', '10', '11', '12'],
			            axisTick: {
			                alignWithLabel: true
			            },
			            axisLabel: {
	                        show: true,
	                        textStyle: {
								color: 'white',
								fontSize: '15',
								padding: [8, 0, 0, 0]

							}
	                    },
	                   
						axisLine: {
							lineStyle: {
								color: '#343b52'
							}
						}
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
						splitNumber: 4,
			            axisLabel: {
	                        show: true,
	                        textStyle: {
	                            color: '#7b85a5'
	                        }
	                    },
	                    splitLine: {
	                        lineStyle:{
	                            color:'#343b52'
	                        }
	                    },
						axisLine:{
							show: false
						}
			        }
			    ],
			    series : [
			        {
			            name:'费用',
			            type:'bar',
			            barWidth: '27%',
			            data:[this.financeState[0].monthlyExpense, this.financeState[1].monthlyExpense, this.financeState[2].monthlyExpense, this.financeState[3].monthlyExpense, this.financeState[4].monthlyExpense]
			        }
			    ]
            })
        
    	}
    	// ,
    	// doNetWork(){

    	// 	this.$http.get('../../../static/help.json').then(function(response){
    	// 		var data = JSON.parse(response.bodyText)
    	// 		console.log(data);
    	// 	},function(response){
    	// 		console.log(response);
    	// 	});
    		
    	// }
	}
}
</script>
