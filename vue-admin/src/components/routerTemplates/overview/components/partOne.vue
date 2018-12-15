<template>
	<!--总览页面-->
	<!--partOne-->
	<div id="partOne">
		
		<div  class="pies" v-for="item in pieList" :id="item.id">
			 <i-circle :percent="80" :stroke-color="item.stroke" :stroke-width="10" :trail-width='10' :size='140'>
                 <span class="demo-Circle-inner" style="font-size:16px" :trail-width="25"  >
                 	<div class="demo-Circle-custom">
			            <i>{{item.percent}}</i>
			            <p>{{item.title}}</p>
                    </div>
                 </span>
             </i-circle>
		</div>

	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				pieList:[{id:'pieOne',percent:"75%",title:'收件量完成率',stroke:'#2db7f5'},{id:'pieTwo',percent:"60%",title:'派件量占比',stroke:'#5cb85c'},{id:'pieThree',percent:"15%",title:'问题件占比',stroke:'#ff5500'}]
			}
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style>
	#partOne{
		width: 100%;
		min-height: 230px;
	}
	.pies{
		width: 33%;
		height: 140px;
		float: left;
		position: relative;
	}
	.contenta{
		position: absolute;
		left: 0;
		top: 0;
		font-size: 14px;
		z-index: 100;
	}
	.ivu-chart-circle{
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: 0 auto;
	}
	.demo-Circle-custom i{
		font-style: normal;
	}
</style>