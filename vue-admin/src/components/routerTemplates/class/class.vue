<template>
	<!--班次查询页面-->
	<div id="class-static">
		<div class="class-header">
			<div id="class-header-left">
				<span>班次选择：</span>
				<class-com></class-com>
			</div>
			<div id="class-header-right">
				<date-com  type='2'></date-com>
			</div>
		</div>
		<div class="class-body">
			<table-com></table-com>
		</div>
	</div>
</template>

<script>
	import dateCom from '../lineStatic/components/Date.vue'
	import classCom from './components/Class.vue'
	import classTable from './components/Table.vue'
	export default{
		components:{
			'date-com':dateCom,
			'class-com':classCom,
			'table-com':classTable
		},
		data(){
			return{
				
			}
		},
		created(){
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	#class-static{
		margin: 30px 30px;
	}
	.class-header{
		height: 100px;
		border-bottom: 1px dotted #000;
	}
	#class-header-left, #class-header-center, #class-header-right{
		height: 100px;
		float: left;
	}
	#class-header-right{
		padding-top:32px;
		margin-left: 90px;
	}
	#class-header-left>span, #class-header-center>span{
		height: 100px;
		line-height: 100px;
		text-align: center;
		font-size: 15px;
		float: left;
		padding: 0 5px;
	}
	.class-body{
		margin-top: 30px;
		border: 1px solid #eee;
	}

</style>