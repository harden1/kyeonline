
<template>
    <div class="finance-table-container">
    	<div class="finance-table-scroll" @mousewheel="mouseScroll($event)">
	    	<div class="finance-table-tr" v-for="item in accountDetail">
	    		<div class="td-time">{{item.time}}</div>
	    		<div class="td-type">{{item.type}}</div>
	    		<div class="td-project">{{item.project}}</div>
	    		<div class="td-usage">{{item.usage}}</div>
	    		<div class="td-remark">{{item.remark}}</div>
	    		<div class="td-count">{{item.count}}</div>
	    		<div class="td-per">￥{{item.per}}</div>
	    		<div class="td-total">￥{{item.total}}</div>
	    		<div class="finance-tr-blank"></div>
	    	</div>
    	</div>
    	<!-- <el-table :data="accountDetail" style="width: 100%; background: #26293c" height="240" align="center" :row-style="rowClass" :show-header="false">
			<el-table-column prop="time" label="发生时间" width="180" background="black" ></el-table-column>
			<el-table-column prop="type" label="类型" width="150" class="black-header"></el-table-column>
			<el-table-column prop="project" label="项目" width="280" class="black-header"></el-table-column>
			<el-table-column prop="usage" label="用途" width="280" class="black-header"></el-table-column>
			<el-table-column prop="remark" label="备注" width="280" class="black-header"></el-table-column>
			<el-table-column prop="count" label="数量" width="70" class="black-header"></el-table-column>
			<el-table-column prop="per" label="单价" width="180" class="black-header"></el-table-column>
			<el-table-column prop="total" label="总计" class="black-header"></el-table-column>
		</el-table> -->
    </div>
</template>

<script>

export default {
	name: 'FinanceTable',
	props: ['accountDetail'],
    methods: {
    	
		mouseScroll: function(e){

            e.stopPropagation() 
            
        }
    }
}
</script>

<style lang="scss" scoped>
	
	.el-table{
		border: none;
	}
	.el-table::-webkit-scrollbar { 
		display:none 
	}
	.el-table th.is-leaf{
		background-color: #2b3247 !important;
	}
	.finance-table-container{
		height: 202px;
		width: 1440px;
		background-color: #2b3247;
		overflow: hidden;
		// color: #7b85a5;
	}
	.finance-table-scroll{
		width: 105%;
		height: 100%;
		overflow-y: scroll; 
	}
	.finance-table-scroll:hover{

		width: 100% !important; 
	}
	// webkit
    .finance-table-scroll::-webkit-scrollbar-button {
        background-color:#2b3247;
    }
    .finance-table-scroll::-webkit-scrollbar {
        width:5px;
        height:10px;
    }
    .finance-table-scroll::-webkit-scrollbar-thumb{
        background:#4f525f;
        border-radius:10px;
    }
	// .finance-table-container::-webkit-scrollbar { 
	// 	display:none 
	// }
	.finance-table-tr{
		height: 50px;
		width: 100%;
		background-color: #2b3247;
	}
	.finance-tr-blank{
		clear: both;
	}
	.finance-table-tr div{
		float: left;
		height: 50px;
		line-height: 50px;
		text-align: left;
		color: #7b85a5;
		font-size: 15px;
		overflow: hidden;
		border-top: 1px solid #282d41;
	}
	.td-time{
		width: 165px;
		margin-left: 30px;	
	}
	.td-type{
		width: 150px;
	}
	.td-project{
		width: 225px;		
	}
	.td-usage{
		width: 230px;
	}
	.td-remark{
		width: 240px;
	}
	.td-count{
		width: 120px;
	}
	.td-per{
		width: 120px;
	}
	.td-total{
		width: 135px;
		text-align: right !important;
		// margin-right: 20px;
		color: #45be89 !important;
	}
</style>
