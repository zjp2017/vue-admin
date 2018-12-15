<template>
	<div id="home">
		<header-com></header-com>
		<!--<div >-->
			<side-com></side-com>
		<!--</div>-->
		<content-com></content-com>
	</div>
</template>

<script>
	import SideBarCom from '../components/homeTemplates/SideBar.vue'
	import HeaderCom from '../components/homeTemplates/Header.vue'
	import ContentCom from '../components/homeTemplates/Content.vue'
	
	export default{
		data(){
			return{
				
			}
		},
		components:{
			'side-com':SideBarCom,
			'header-com':HeaderCom,
			'content-com':ContentCom
		}
	}
</script>

<style>
 *{
    margin: 0;
    padding: 0;
 }
	html,body{
	   height: 100%;
	}
</style>