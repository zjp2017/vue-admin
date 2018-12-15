<template>
	<!--线路查询页面-->
	<div id="line">
		<div class="header">
			<div id="header-left">
				<span>始发城市：</span>
				<start-com :type='1'></start-com>
			</div>
			<div id="header-center">
				<span>终到城市：</span>
				<start-com :type='2'></start-com>
			</div>
			<div id="header-right">
				<date-com type='1'></date-com>
			</div>
		</div>
		<div class="line-body">
			<table-com></table-com>
		</div>
	</div>
</template>

<script>
	import startStation from './components/startStation.vue'
	import dateCom from './components/Date.vue'
	import tableCom from './components/table.vue'
	export default{
		components:{
			'start-com':startStation,
			'date-com':dateCom,
			'table-com':tableCom
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	#line{
		margin: 30px 30px;
	}
	.header{
		height: 100px;
		border-bottom: 1px dotted #000;
	}
	#header-left, #header-center, #header-right{
		height: 100px;
		float: left;
	}
	#header-right{
		padding-top:32px;
		
	}
	#header-left>span, #header-center>span{
		height: 100px;
		line-height: 100px;
		text-align: center;
		font-size: 15px;
		float: left;
		padding: 0 5px;
	}
	#header-left .startStation,#header-center .startStation{
		height: 100px;		
		float: left;
	}
	.line-body{
		margin-top: 30px;
		border: 1px solid #eee;
	}
</style>