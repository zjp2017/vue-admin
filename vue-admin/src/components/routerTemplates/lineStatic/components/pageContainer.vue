<template>
	<!--分页器-->
	<div class="page-container">
		<Page :total="100" show-elevator @on-change='selectPage' />
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			selectPage(param){
				console.log(param);
			}
		}
	}
</script>

<style scoped>
	.page-container{
		width: 100%;
	}
</style>