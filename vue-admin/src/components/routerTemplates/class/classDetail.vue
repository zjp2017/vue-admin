<template>
	<!--班次查询页面的详细页面-->
	<div id="class-detail">
		<Button type="primary" @click="back">返回</Button>
		<div class="table-box">
			<div class="table-warp">
				<ul class="table-title">
					<li>出发日期</li>
					<li>到达日期</li>
					<li>丢失件收件网点</li>
					<li>丢失件运单号</li>
					<li>丢失件寄件人姓名</li>
					<li>丢失件寄件人手机号</li>
					<li>丢失件名称</li>
					<li>保价金额（元）</li>
					<li>备&nbsp;&nbsp;注</li>
				</ul>
				<ul class="table-body">
					<li>2018-10-11</li>
					<li>2018-10-12</li>
					<li>北京海淀区某某网点</li>
					<li>1129310513451</li>
					<li>李某某</li>
					<li>15412357653</li>
					<li>衣物</li>
					<li>0</li>
					<li>由于快件多造成的</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			back(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	.table-box{
		width: 100%;
		height: auto;
	}
	.table-warp{
		width: 100%;
		height: auto;
		border: 1px solid #eee;
	}
	.table-title{
		min-width:1000px ;
		height: 50px;
		background: #eee;
	}
	.table-title li{
		height: 50px;
		line-height: 50px;
		text-align: center;
        font-size: 14px;
        color: #000;
        float: left;
        width: 9%;
	}
	.table-title li:nth-child(1), .table-body li:nth-child(1){
		width: 10%;
	}
	.table-title li:nth-child(2), .table-body li:nth-child(2){
		width: 10%;
	}
	.table-title li:nth-child(3), .table-body li:nth-child(3){
		width: 12%;
	}
	.table-title li:nth-child(4), .table-body li:nth-child(4){
		width: 12%;
	}
	.table-title li:nth-child(5), .table-body li:nth-child(5){
		width: 12%;
	}
	.table-title li:nth-child(6), .table-body li:nth-child(6){
		width: 14%;
	}
	.table-title li:nth-child(7), .table-body li:nth-child(7){
		width: 10%;
	}
	.table-title li:nth-child(8), .table-body li:nth-child(8){
		width: 10%;
	}
	.table-title li:nth-child(9), .table-body li:nth-child(9){
		width: 10%;
	}
	.table-body{
		min-width:1000px ;
		height: 50px;
		border-bottom: 1px solid #eee;
	}
	.table-body li{
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #000;
        float: left;
        width: 9%;
	}
</style>