<template>
	<!--网点查询页面-->
	<div class="network">
		<!--网点查询页面-->
		<div class="network-header">
			<city-com></city-com>
		</div>
		<div class="table-warp">
			<net-table></net-table>
		</div>
	</div>
</template>

<script>
	import cityList from './components/cities.vue'
	import netTable from './components/table.vue'
	export default{
		components:{
			'city-com':cityList,
			'net-table':netTable
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.network{
		margin: 30px 30px;
	}
	.network-header{
		height: 88px;
        border-bottom: 1px dotted #000;
	}
	.table-warp{
		
	}
</style>