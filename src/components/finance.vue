<template>
    <div id="finance">
    	<div class="finance-title">
    		<div class="finance-title-content">
    			<div class="finance-10"></div>
    			<div class="finance-title-icon" :style="financeTitleIcon"></div>
    			<div class="finance-title-text">财务统计</div>
                <div class="finance-to-home" :style="financeHomeIcon" v-on:click="goHomePage"></div>
    			<div class="home-clear"></div>
    		</div>	
    	</div>

    	<div class="finance-charts">

    		<div class="finance-charts-left">
    			<div class="finance-chart-title">
                    <div class="finance-chart-title-left">财务状况</div>
                    <div class="finance-chart-title-right">
                        <div class="finance-title-right-num">￥{{financeTotal | chargeFormat}}</div>
                        <div class="finance-title-right-text">总支出</div>
                        <div class="home-clear"></div>
                    </div>
                    <div class="finance-charts-y-num">

                        <template v-for="item in financeState">

                            <template v-if="item.monthlyExpense != '0'">
                                <div>{{item.monthlyExpense |chargeFormat }}</div>
                            </template>
                            <template v-else>
                                <div> </div>
                            </template>

                        </template>
                        
                        <div class="home-clear"></div>
                    </div>
                </div>

                <div class="finance-charts-left-vertical">
                    <template v-if="financeState.length > 0">
                        <v-month-chart v-bind:financeState="financeState"></v-month-chart>
                    </template> 
                </div> 
    		</div>

    		<div class="finance-charts-right">
    			<div class="finance-charts-right-title">总支出类项</div>
    			<div class="finance-class-charts">
                    <template v-if="chargeDetail.designCharge">
                        <v-total-finance-chart v-bind:chargeDetail="chargeDetail"></v-total-finance-chart>
                    </template>
    			</div>
    			<div class="finance-class-charts-desc">
    				<div class="finance-class-cpntent">
    					<div class="finance-class-line1">
    						<div class="point"></div>
    						<div class="text">设计费</div>

                                <template v-if="chargeDetail.designCharge">
                                    <div class="money">￥{{chargeDetail.designCharge.charge}}</div>
                                    <div class="persent">{{chargeDetail.designCharge.persent}}</div>
                                </template>
                                
                                <div class="home-clear"></div>
                           
    						
    					</div>

    					<div class="finance-class-line1">
    						<div class="point point-green"></div>
    						<div class="text">硬件采购</div>

                            <template v-if="chargeDetail.hardwareCharge">
                                <div class="money">￥{{chargeDetail.hardwareCharge.charge}}</div>
    						    <div class="persent">{{chargeDetail.hardwareCharge.persent}}</div>
                            </template>
    						
    						<div class="home-clear"></div>
    					</div>

    					<div class="finance-class-line1">
    						<div class="point point-yellow"></div>
    						<div class="text">云服务</div>

                            <template v-if="chargeDetail.yunService">
                                <div class="money">￥{{chargeDetail.yunService.charge}}</div>
                                <div class="persent">{{chargeDetail.yunService.persent}}</div>
                            </template>

    						<div class="home-clear"></div>
    					</div>
    				</div>
    			</div>
    			<div class="home-clear"></div>
    		</div>
    	</div>
		
        <div class="finance-table-area">
		<div class="finance-table-title">
            <div class="finance-title-text">账目明细</div>
            <div class="finance-more">
                <template v-if="accountDetail.perWeek">
                    <div class="date-btn" v-on:click.stop="preMonthClick" v-bind:class="{btnActive: isMonthSelectArr[0]}">{{accountDetail.perWeek.time}}</div>
                    <div class="date-btn" v-on:click.stop="thisMonthClick" v-bind:class="{btnActive: isMonthSelectArr[1]}">{{accountDetail.thisWeek.time}}</div>
                    <div class="date-btn" v-on:click.stop="nextMonthClick" v-bind:class="{btnActive: isMonthSelectArr[2]}">{{accountDetail.nextWeek.time}}</div>
                </template>
            </div>  
            <div class="home-clear"></div>    
        </div>
        <div class="finance-table-header">
            <span class="finance-table-time">发生时间</span><span class="finance-table-type">类型</span><span class="finance-table-project">项目</span>
            <span class="finance-table-usage">用途</span><span class="finance-table-backup">备注</span><span class="finance-table-count">数量</span>
            <span class="finance-table-per">单价</span><span class="finance-table-total">总计</span>
        </div>
        <!-- v-on:click="financeTableClick" -->
    	<div class="finance-table">
            <template v-if="accountDetail.thisWeek">
                <v-finance-table v-bind:accountDetail="accountTableData"></v-finance-table>
            </template>
    		<!-- <v-finance-table></v-finance-table> -->
    	</div>
        </div>

    </div>
</template>

<script>
	
	import FinanceTotalChart from '@comp/Finance-Total-Chart'
    import FinanceMonthChart from '@comp/Finance-Month-Chart'
    import FinanceTable from '@comp/Finance-Table'
    import { getHomePageData }  from '../http/'; 

    // import { entiretyData } from './entirety'
     import entiretyData from '../../static/entirety.json'
   
	export default {
        name: 'finance',
		components:{
            'v-total-finance-chart': FinanceTotalChart,
            'v-month-chart': FinanceMonthChart,
            'v-finance-table': FinanceTable
        },
        data(){
            return{
                financeState: [],   // 财务状况
                financeTotal: '',   // 总支出
                chargeDetail: {},   // 总支出类项
                accountDetail:{},   // 账目明细
                financeTitleIcon: {
                    backgroundImage: 'url(' + require('../assets/imgs/finance-title.png') + ')',
                },
                financeUrl: 'require(' + '../../static/financeDetail.htm',
                isMonthSelectArr: [true, false, false],
                accountTableData: [],
                financeHomeIcon: {
                    backgroundImage: 'url(' + require('../assets/imgs/home.png') + ')',
                },  
            }
        },
        mounted () {   
            this.financeNetworkInit()
            
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

            financeNetworkInit(){

                    this.financeState = entiretyData.monthDetail
                    this.chargeDetail = entiretyData.expendDetail.totalExpendCategory
                    this.accountDetail = entiretyData.accountsDetail
                    this.accountTableData = entiretyData.accountsDetail.thisWeek.data
                    this.thisMonthClick()

                    var total = 0
                    for(var i=0; i<entiretyData.monthDetail.length; i++){
                        
                        total += parseInt(entiretyData.monthDetail[i].monthlyExpense)
                    }
                    this.financeTotal = total.toString()



                // this.$http.get('static/entirety.json').then(function(response){
                    
                //     var data = JSON.parse(response.bodyText)
                
                //     this.financeState = data.monthDetail
                //     this.chargeDetail = data.expendDetail.totalExpendCategory
                //     this.accountDetail = data.accountsDetail
                //     this.accountTableData = data.accountsDetail.thisWeek.data
                //     this.thisMonthClick()

                //     var total = 0
                //     for(var i=0; i<data.monthDetail.length; i++){
                        
                //         total += parseInt(data.monthDetail[i].monthlyExpense)
                //     }
                //     this.financeTotal = total
                // },function(response){
                //     console.log(response);
                // });



                // getHomePageData().then(response => {       
                  
                //     // debugger
                //     var data = response.data
               
                //     this.financeState = data.monthDetail
                //     this.chargeDetail = data.expendDetail.totalExpendCategory
                //     this.accountDetail = data.accountsDetail
                //     this.accountTableData = data.accountsDetail.thisWeek.data
                //     this.thisMonthClick()

                //     var total = 0
                //     for(var i=0; i<data.monthDetail.length; i++){
                        
                //         total += parseInt(data.monthDetail[i].monthlyExpense)
                //     }
                //     this.financeTotal = total

                // });
            },
            financeTableClick: function(){
                //  window.open(this.financeUrl)
                window.location = this.financeUrl
            },
            preMonthClick: function(){
                this.isMonthSelectArr = [true, false, false]
                this.accountTableData = this.accountDetail.perWeek.data 
               
            },
            thisMonthClick: function(){
                this.isMonthSelectArr = [false, true, false]  
                this.accountTableData = this.accountDetail.thisWeek.data 
            },
            nextMonthClick: function(){
                this.isMonthSelectArr = [false, false, true]  
                this.accountTableData = this.accountDetail.nextWeek.data 
            },
            goHomePage: function(param){
                
                this.$emit('goHomePage')
            }
        }  
	}
</script>

<style lang="scss" scoped> 
#finance{
    height: 100%;
    min-width: 1300px;
    width: 1440px;
    height: 710px;
    margin-left: auto;
    margin-right: auto;
}
.finance-title{
    width: 100%;
    height: 13%;
    color: #66aae9;
    margin-top: 50px;
}
.finance-charts{
    width: 100%;
    height: 375px;
}
.finance-table{
    width: 100%;
    height: 210px;
    margin-top: 10px;
    border-radius: 10px;
    cursor: pointer;
}
.finance-charts-left{
    float: left;
    height: 100%;
    width: 41%;
    min-width: 500px;
    background-color: #2b3247;
    border-radius: 3px;
}
.finance-charts-right{
    float: left;
    height: 100%;
    width: 58%;
    background-color: #2b3247;
    margin-left: 1%;
    border-radius: 3px;
    min-width: 600px;
    // background-color: white;
}
.finance-charts-left .finance-charts-left-total{
    width: 100%;
    height: 47%;
    border-radius: 10px;
    background-color: #2b3247;
}
.finance-charts-left .finance-charts-left-month{
    width: 100%;
    height: 47%;
    border-radius: 10px;
    margin-top: 4%;
    background-color: #2b3247;
}

.finance-chart-title{
    position: absolute;
    width: 32%;
    height: 60px;
    z-index: 9;
    color: white;
}
.finance-chart-title-left{
    width: 50%;
    height: 40px;
    padding-left: 30px;
    line-height: 60px;
    font-size: 17px;
    font-weight: 700;
    text-align: left;
    padding-top: 8px;
}
.finance-chart-title-right{
    width: 200px;
    height: 30px;
    margin-left: 380px;
}
.finance-title-right-num{
    height: 50%;
    padding-top: 15px;
    padding-top: 15px;
    padding-left: 20px;
    font-size: 26px;
    float: left;
    color: #66aae9;
}
.finance-title-right-text{
    height: 50%;
    padding-top: 15px;
    padding-left: 10px;
    color: #7b85a5;
    float: left;
    font-size: 15px;
    line-height: 40px;
}
.title-unit{
    padding-left: 5px;
    color: #757d97;
    font-size: 13px;
}
.home-clear{
    clear: both;
}
.finance-charts-left-vertical{
    margin-top: 65px;
    width: 100%;
    height: 290px;
    // border: 1px solid red;
}
.home-clear{
    clear: both;
}
.finance-title-text{
    float: left;
    width: 100px;
    height: 40px;
    font-size: 22px;
    padding-top: 5px;
    padding-left: 10px;
    font-weight: 600;
}
.finance-title-icon{
    float: left;
    width: 23px;
    height: 24px;
    margin-top: 4px;
    // background-image: url(../assets/imgs/finance-title.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.finance-title-content{
    height: 40px;
    width: 140px;
    margin-left: auto;
    margin-right: auto;
}
.finance-10{
    height: 20px;
}
.finance-charts-right-title{
    height: 60px;
    // border: 1px solid blue;
    font-size: 17px;
    font-weight: 700;
    text-align: left;
    padding-top: 30px;
    padding-left: 30px;
    color: white;
}
.finance-class-charts{
    float: left;
    width: 350px;
    height: 260px;
    // background-color: blue;
}
.finance-class-charts-desc{
    float: left;
    width: 50%;
    height: 260px;
    margin-left: 30px;
    margin-top: 25px;
    // background-color: green;
}
.finance-class-cpntent{
    width: 400px;
    height: 200px;
    margin-top: 50px;
    font-size: 15px;
    // border: 1px solid red;
}
.finance-class-line1{
    color: white;
    margin-top: 20px;
    text-align: left;
    height: 30px;
}
.finance-class-line1 div{
    
    height: 50px;
    width: 100px;

}
.finance-class-line1 .point{
    float: left;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #63a8eb;
    margin-top: 4px;
}
.point-green{
    background-color: #45be89 !important;
}
.point-yellow{
    background-color: #f2a553 !important;
}
.finance-class-line1 .text{
    float: left;
    text-align: left;
    font-size: 16px;
    padding-left: 20px;
}
.finance-class-line1 .money{
    float: left;
    text-align: left;
    font-size: 17px;
}
.finance-class-line1 .persent{
    float: left;
    text-align: left;
    font-size: 22px;
    margin-left: 30px;
}
.finance-table-title{
    color: white;
    text-align: left;
    font-size: 18px;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 20px;
}
.finance-table-header{
    height: 20px;
    background-color: #2b3247;
    color: white;
    text-align: left;
}
.finance-table-time{
    padding-left: 30px;
}
.finance-table-type{
    padding-left: 115px;
}
.finance-table-project{
    padding-left: 120px;
}
.finance-table-usage{
    padding-left: 190px;
}
.finance-table-backup{
    padding-left: 200px;
}
.finance-table-count{
    padding-left: 200px;
}
.finance-table-per{
    padding-left: 100px;
}
.finance-table-total{
    padding-left: 200px;
}
.finance-table-area{
    background-color: #2b3247;
    border-radius: 3px;
}
.finance-title-text{
    float: left;
    width: 100px;
}
.finance-more{
    width: 200px; 
    height: 40px;  
    margin-left: 1190px;  
}
.finance-more div{
    float: left;
    width: 56px;
    height: 28px;
    text-align: center;
    border-radius: 20px;
    line-height: 28px;
    font-size: 16px;
    font-weight: 700;
    background-color: #3e455b;
    margin-left: 10px;
    color: #7c85a5;
    cursor: pointer;
}
.el-icon-information{
    padding-right: 10px;
}
.btnActive{
    background-color: #63a8eb !important;
    color: white !important;
}
.finance-charts-y-num{
    width: 590px;
    height: 40px;
    // border: 1px solid red;
    line-height: 65px;
    font-size: 15px;
    color: #63a8eb;
    // width: 70px;
    div{
        width: 80px;
        height: 65px;
        float: left;
        text-align: center;
        font-size: 16px;
        color: #63a8eb;
        font-weight: 700;
    }

    div:nth-child(1){
        // float: left;   
        margin-left: 92px;
    }
    div:nth-child(2){
        // float: left;   
        margin-left: 20px;
    }
    div:nth-child(3){
        // float: left;   
        margin-left: 20px;
    }
    div:nth-child(4){
        // float: left;   
        margin-left: 20px;
    }
    div:nth-child(5){
        // float: left;   
        margin-left: 20px;
    }
}
.finance-to-home{
    position: absolute;
    width: 20px;
    height: 20px;
    // background-color: white;
    left: 1500px;
    margin-top: 15px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    cursor: pointer;
}
</style>
