<template>
	<!--总览页面-->
	<!--partTwo-->
	<div id="partTwo">
		<div id="trend">
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			this.getEcharts();	
		},
		methods:{
			getEcharts(){
				let myChart = this.$echarts.init(document.getElementById('trend'));
				myChart.setOption({
					color:['#2db7f5','#5cb85c','#ff5500'],
				    tooltip: {
				        trigger: 'axis',
				    },
				    toolbox: {
				        feature: {
				            dataZoom: {
				                yAxisIndex: 'none'
				            },
				            restore: {},
				            saveAsImage: {}
				        },
				        top:-4
			   		 },
				    legend: {
				        data:['收件量','派件量','问题件量'],
				        right:150
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        top: '13%',
				        height:300,
				    },
				    xAxis: {
				        type: 'category',
				        boundaryGap: false,
				        data: ['2018-01','2018-02','2018-03','2018-04','2018-05','2018-06','2018-07','2018-08']
				    },
				    yAxis: [
				    	{
					        type: 'value',
					        name:'数量',
					        splitLine:{
					        	show:false
					        },
					        axisTick:{
					        	show:false
					        },
					        axisLabel:{
					        	formatter:'{value}'
					        }
					       
				    	}
				    ],
				    dataZoom:[
				      {
				      	type:'slider',
				      	show:true,
				      	handleIcon:'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
				      	xAxisIndex:0,
				      	bottom:5,
				      	startValue:'2018-04',
				      	
				      }
				    ],
				    series: [
				        {
				            name:'收件量',
				            type:'line',
				            stack: '总量',
				            data:[120, 132, 101, 134, 90, 230, 210,300],
				            itemStyle:{
				            	normal:{
				            		label:{
				            			show:true,
				            			fontSize:12
				            		}
				            	}
				            }
				        },
				        {
				            name:'派件量',
				            type:'line',
				            stack: '总量',
				            data:[220, 182, 191, 234, 290, 330, 310,200],
				            itemStyle:{
				            	normal:{
				            		label:{
				            			show:true,
				            			fontSize:12
				            		}
				            	}
				            }
				        },
				        {
				            name:'问题件量',
				            type:'line',
				            stack: '总量',
				            data:[150, 232, 201, 154, 190, 330, 410,100],
				            itemStyle:{
				            	normal:{
				            		label:{
				            			show:true,
				            			fontSize:12
				            		}
				            	}
				            }
				        }
				         
				    ]
				},true,window.onresize=myChart.resize);
			}
		}
	}
</script>

<style>
	#trend{
		width: 94%;
		margin: 0 3%;
		height: 420px;
		margin-bottom: 50px;
	}
</style>