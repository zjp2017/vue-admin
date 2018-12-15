<template>
	<!--班次统计页面的表格-->
	<div class="class-table">
		<div class="table-component">
			<ul class="table-header">
				<li>出发日期</li>
				<li>到达日期</li>
				<li>用时</li>
				<li>件量</li>
				<li>车牌号</li>
				<li>丢失件</li>
				<li>负责人</li>
				<li>负责人电话</li>
				<li></li>
			</ul>
			<ul class="table-content" v-for="(item,index) in tabledata">
				<li>{{item.startdate}}</li>
				<li>{{item.arrivedate}}</li>
				<li>{{item.useTime}}</li>
				<li>1{{item.count}}</li>
				<li>{{item.plateNumber}}</li>
				<li>{{item.lose}}</li>
				<li>{{item.mainPerson}}</li>
				<li>{{item.tel}}</li>
				<li ><a @click="centerdetail(index)" title="查看详情">{{item.remarks}}</a></li>
			</ul>
			<div class="page-container">
				<Page :total="100" show-elevator @on-change='selectPage'/>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tabledata:[],
				requestData:{startDate:'',endDate:'',className:'k1201',pageNum:1}
			}
		},
		mounted(){
			this.getAjax();
			this.$bus.$on('classdate',num=>{
				this.requestData.startDate=num.startDate;
				this.requestData.endDate=num.endDate;
				this.getAjax();
			});
			this.$bus.$on('className',num=>{
				this.getAjax();
			});	
		},
		methods:{
			selectPage(){
				this.getAjax();
			},
			//今日详细页面
			centerdetail(index){
				this.$router.push('detail/'+(index+1));
			},
			getAjax(){
				let that=this;
				//settimeout模拟一个Ajax请求
				this.tabledata=[];
				setTimeout(function(){
					for(let i=0;i<10;i++){
						let obj={
							startdate:'2018-09-12',
							arrivedate:'2018-09-13',
							useTime:'24小时',
							count:'8080',
							plateNumber:'粤A12345',
							lose:'1',
							mainPerson:'李某某',
							tel:'18012345623',
							remarks:'详细'
						}
					   that.tabledata.push(obj);
					}
				},1500)
			},
		}
	}
</script>

<style>
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