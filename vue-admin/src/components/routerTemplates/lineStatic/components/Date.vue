<template>
	<div class="select-date">
		<Row>
        <Col span="12">
            <DatePicker :value="value1" type="daterange" show-week-numbers placement="bottom-end" placeholder="Select date" style="width: 200px" @on-change='changeTime'></DatePicker>
        </Col>
       </Row>
	</div>
</template>

<script>
	import {currDate,currTenDays} from '@/common/commonMethods.js'
	console.log();
	export default{
		data(){
			return{
				value1:[currTenDays(),currDate()]
			}
		},
		props:['type'],
		methods:{
			changeTime(value1){
				let obj={
					startDate:value1[0],
					endDate:value1[1],
				}
				if(this.type==1){
					this.$bus.$emit('linedate',obj);
				}else if(this.type==2){
					this.$bus.$emit('classdate',obj);
				}
			   
			}
		},
		
	}
</script>

<style>
</style>