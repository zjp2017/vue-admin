<template>
	<div class="startStation">
		<Select v-model="model1" style="width:200px" @on-change='selectCity'>
		        <OptionGroup label="热门城市" >
		            <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
		        </OptionGroup>
		        <OptionGroup label="其他城市">
		            <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
		        </OptionGroup>
        </Select>
	</div>
</template>

<script>
	export default{
		data(){
			return{
                cityList1: [
                    {value: '北京',label: '北京'},
                    {value: '上海',label: '上海'},
                    {value: '广州', label: '广州'},
                    {value: '深圳',label: '深圳'}
                ],
                cityList2: [{value: '天津',label: '天津'},
                    {value: '石家庄', label: '石家庄'},
                    {value: '郑州',label: '郑州'},
                    {value: '武汉',label: '武汉'},
                    {value: '长沙',label: '长沙'}
                ],
                model1: '北京'
			}
		},
		props:['type'],
		created(){
			if(this.type==1){
				this.model1='北京';
			}else if(this.type==2){
				this.model1='上海';
			}
			console.log(this.type);
		},
		methods:{
			selectCity(param){	
				if(this.type==1){
				    this.$bus.$emit('startCity',param);
				}else if(this.type==2){
				    this.$bus.$emit('arriveCity',param);
				}
			}
		}
	}
</script>

<style scoped>
	.startStation{
		width: 200px;
	}
	.ivu-select{
		width: 140px!important;
		margin-top: 33px!important;
	}
</style>