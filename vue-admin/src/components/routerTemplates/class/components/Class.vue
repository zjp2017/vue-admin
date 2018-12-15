<template>
	<div class="class-select">
		<Select v-model="model1" style="width:200px" @on-change='selectClass'>
		       <Option v-for="item in classList" :value="item" :key="item.value">{{ item }}</Option>
        </Select>
	</div>
</template>

<script>
	export default{
		data(){
			return{
                classList: ['K12345','T12356','T56843','L9088'],
                model1: 'K12345'
			}
		},
		props:['type'],
		methods:{
			selectClass(param){	
				this.$bus.$emit('className',param);
			}
		}
	}
</script>

<style scoped>
	.class-select{
		/*width: 200px;*/
		float: left;
	}
	.ivu-select{
		width: 140px!important;
		margin-top: 33px!important;
	}
</style>