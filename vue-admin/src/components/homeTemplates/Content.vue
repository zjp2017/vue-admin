<template>
	<div id="content">
		<marquee width=100% behavior=scroll direction=left align=middle bgcolor=orangoldenrod color=#fff>
			本网页所有内容纯属虚构，仅供开发人员参考！	
		</marquee>
         <router-view></router-view>
	</div>
</template>

<script>
</script>

<style scoped>
	#content{
		position: absolute;
        left: 200px;
        right: 0;
        top: 56px;
        bottom: 0;
        z-index: 98;
        min-width:1000px ;
        overflow: hidden;
        overflow-y: auto;
        box-sizing: border-box;
        padding: 20px 10px 0 10px;
	}
	marquee{
		position: absolute;
		left: 0;
		top: 0;
	}
</style>