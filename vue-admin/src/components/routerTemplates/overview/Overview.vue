<template>
	<!--总览情况页面-->
	<div id="Overview">
		<h3>截止今天完成进度：</h3>
		<one-com></one-com>
		<h3>完成量走势图：</h3>
		<two-com></two-com>
	</div>
</template>

<script>
	import partOne from './components/partOne.vue'
	import partTwo from './components/partTwo.vue'
	export default{
		components:{
			'one-com':partOne,
			'two-com':partTwo
		},
		data(){
			return{
				
			}
		},
		mounted(){
		},
		methods:{
		}
	}
</script>

<style>
#Overview{
	padding-top:30px;
}
#Overview>h3{
	margin-bottom: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
}
</style>