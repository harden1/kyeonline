<style lang="scss" scoped>
    #homeProgressChart{
		width: 100%;
		height: 90%;
		margin-top: 10%;
		padding-left: 28px;
		background-color: black;
	}
</style>

<template>
    <div id="homeProgressChart"></div>
</template>

<script>

export default {
	props: ['progress'],
    mounted () {   
        this.homeProgressChartInit()
    },
    methods: {
      	homeProgressChartInit(){
      		var real = this.progress.real.replace('%', '')
      		var forward = this.progress.forward.replace('%', '')
      		var delay =  this.progress.delay.replace('%', '')

        	var myChart = document.getElementById('homeProgressChart')
        	this.echarts(myChart).setOption({
        		color: ['#64a9ee', '#45be89', '#f2a553', '#343b52','#58B7FF'],   
	      //       tooltip: {
			    //     trigger: 'item',
			    //     formatter: "{d}%"
			    // },
			    
			    series: [
			        {
			            name:'',
			            type:'pie',
			            radius: ['60%', '80%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: true,
			                    position: 'center',
			                    formatter: '{d}'
			                },
			                emphasis: {
			                    show: true,
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
			                {value: real, name:'当前进度'},
			                {value: forward, name:'提前进度'},
			                {value: delay, name:'延迟进度'},
			                {value:100 - real - forward - delay, name:'剩余'}

			            ]
			        }
			    ] 
			    //option end
            })
        
    	}
	}
}
</script>
