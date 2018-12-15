<template>
	<div class="table-component">
		<ul class="table-header">
			<li>始发城市</li>
			<li>到达城市</li>
			<li>车次</li>
			<li>运输时间</li>
			<li>最大装载量</li>
			<li>平均实际装载量</li>
			<li>负责人</li>
			<li>负责人电话</li>
			<li>备注</li>
		</ul>
		<ul class="table-content" v-for="item in tabledata">
			<li>{{item.startCity}}</li>
			<li>{{item.arriveCity}}</li>
			<li>{{item.trainNumber}}</li>
			<li>1{{item.useTime}}</li>
			<li>{{item.maxLoder}}</li>
			<li>{{item.realityLoader}}</li>
			<li>{{item.mainPerson}}</li>
			<li>{{item.tel}}</li>
			<li>{{item.remarks}}</li>
		</ul>
		<div class="page-container">
			<Page :total="100" show-elevator @on-change='selectPage'/>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				tabledata:[],
				requestData:{startDate:'',endDate:'',startCity:'北京',arriveCity:'北京',pageNum:1}
			}
		},
		mounted(){
			this.getAjax();
			this.$bus.$on('linedate',num=>{	
				this.requestData.startDate=num.startDate;
				this.requestData.endDate=num.endDate;
				this.getAjax();
			});
			this.$bus.$on('startCity',num=>{
				this.requestData.startCity=num;
				this.getAjax();
			});
			this.$bus.$on('arriveCity',num=>{
				this.requestData.arriveCity=num;
				this.getAjax();
			});
			
		},
		methods:{
			getAjax(){
				let that=this;
				//settimeout模拟一个Ajax请求
				this.tabledata=[];
				this.$Spin.show();
				setTimeout(function(){
					that.$Spin.hide();
					for(let i=0;i<10;i++){
						let obj={
							startCity:that.requestData.startCity,
							arriveCity:that.requestData.arriveCity,
							trainNumber:'k201809',
							useTime:'8.8小时',
							maxLoder:'1800kg',
							realityLoader:'1500kg',
							mainPerson:'李某某',
							tel:'18012345623',
							remarks:'暂无'
						}
					   that.tabledata.push(obj);
					}
				},1500)
			},
			selectPage(param){
				this.getAjax();;
			}
		}
	}
</script>

<style scoped>
	.table-component{
		height: 500px;
	}
	.table-header{
		height: 40px;
		background: #EEEEEE;
		color: #000;
	}
	.table-header li{
		float: left;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 13px;
	}
	.table-content{
		height: 40px;
		border-bottom: 1px solid #eee;
	}
	.table-content li{
		float: left;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 13px;
	}
	.table-header li, .table-content li{
		width: 10%;
	}
	.table-header li:nth-child(6), .table-content li:nth-child(6){
		width: 15%;
	}
	.table-header li:nth-child(8), .table-content li:nth-child(8){
		width: 12%;
	}
	.table-header li:nth-child(9), .table-content li:nth-child(9){
		width: 13%;
	}
	.page-container{
		height: 32px;
		margin: 0 auto;
		position: relative;
		text-align: center;
		margin-top:15px;
	}
	.page-container .ivu-page{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: 0 auto;	
	}
	.table-content:hover{
		background:#ebf7ff ;
	}
	
	
</style>