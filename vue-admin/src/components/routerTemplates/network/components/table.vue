<template>
	<!--网点页面列表-->
	<div class="network-table">
		<ul class="network-table-header">
			<li>网点</li>
			<li>派件量</li>
			<li>收件量</li>
			<li>异常件</li>
			<li>派送范围</li>
			<li>用户评分</li>
			<li>负责人</li>
			<li>电话</li>
		</ul>
		<ul class="network-table-body" v-for="(item,index) in tableList">
			<li><a :title="item.network">{{item.network}}</a></li>
			<li><a :title="item.send">{{item.send}}</a></li>
			<li><a :title="item.receipt">{{item.receipt}}</a></li>
			<li><a :title="item.abnormal">{{item.abnormal}}</a></li>
			<li><a :title="item.sendRange">{{item.sendRange}}</a></li>
			<li><a :title="item.score">{{item.score}}</a></li>
			<li><a :title="item.chargePerson">{{item.chargePerson}}</a></li>
			<li><a :title="item.tel">{{item.tel}}</a></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tableList:[],
			}
		},
		mounted(){
			let that=this;
			this.$bus.$on('cities',function(val){
				let data={city:val.city,distict:val.distict,province:val.province};
				setTimeout(function(){
					that.tableList=[];
					for(let i=0;i<10;i++){
						let obj={
							network:data.city+data.distict+data.province,
							send:'1200',
							receipt:'3999',
							abnormal:'10',
							sendRange:'三环以内',
							score:'3.9',
							chargePerson:'李**',
							tel:'122222'
						};
						that.tableList.push(obj);
					}
					console.log(that.tableList);
				},1000)
			});
		}
	}
</script>

<style scoped>
	.network-table{
		border: 1px solid #eee;
	}
	.network-table-header{
		height: 45px;
		line-height: 45px;
		text-align: center;
		margin-top: 10px;
	}
	.network-table-header li{
		float: left;
		line-height: 45px;
		text-align: center;
		font-size: 14px;
		width: 12.5%;
		background: #eee;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.network-table-body{
		border-bottom: 1px solid #eee;
	}
	.network-table-body li{
		float: left;
		line-height: 45px;
		text-align: center;
		font-size: 14px;
		width: 12.5%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.network-table-body{
		height: 45px;
	}
	.network-table-body li a{
		color: #000;
	}
</style>