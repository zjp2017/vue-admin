<template>
	<!--三级联动-->
	<div id="city">
		<div class="city-box">
			<span class="city-title province">省份：</span>
			 <div class="city-select-box province-box">
			 	<el-select v-model="valueOne" placeholder="请选择" @change='selectProvince'>
			   	  <el-option v-for="(item,index) in optionOne" :key="index" :label="item" :value="index" > </el-option>
 		 		</el-select>
			 </div>
 		 	<span class="city-title city">城市：</span>
			 <div class="city-select-box province-box">
			 	<el-select v-model="valueTwo" placeholder="请选择" @change='selectCity'>
			      <el-option v-for="(item,index) in optionTwo" :key="index" :label="item" :value="index" > </el-option>
 		 	   </el-select>
			 </div>
 		 	<span class="city-title distict">地区：</span>
			 <div class="city-select-box distict-box">
			 	<el-select v-model="valueThree" placeholder="请选择"  @change='selectDistrict'>
			     <el-option v-for="(item,index) in optionThree" :key="index" :label="item" :value="index"></el-option>
 		 	   </el-select>
			 </div>
			 <Button type="primary" shape="circle" icon="ios-search" @click="query">查询</Button>
		</div>
		
	</div>
</template>

<script>
	import City from '@/common/areas.js'
	export default{
		data(){
			let cityListArr=City();
			return{
				valueOne:0,
				valueTwo:0,
				valueThree:0,
				optionOne: [],
				optionTwo: [],
				optionThree: [],
				cityListArr:cityListArr,
				indexone:0,
				indextwo:0,
				indexthree:0,	
			}
		},
		mounted(){	
			for(let i=0;i<this.cityListArr.length;i++){
				this.optionOne.push(this.cityListArr[i].name);
			}
			this.optionTwo.push(this.cityListArr[0].children[0].name);
			for(let i=0;i<this.cityListArr[0].children[0].children.length;i++){
				this.optionThree.push(this.cityListArr[0].children[0].children[i]);
			}
		},
		methods:{
			selectProvince(index){
				this.indexone=index;
				this.optionTwo=[];
				for(let i=0;i<this.cityListArr[index].children.length;i++){
				   this.optionTwo.push(this.cityListArr[index].children[i].name);
			    }
				this.valueTwo=this.cityListArr[index].children[0].name;
				this.optionThree=[];
				for(let i=0;i<this.cityListArr[index].children[0].children.length;i++){
				   this.optionThree.push(this.cityListArr[index].children[0].children[i]);
			    }
				this.valueThree=this.cityListArr[index].children[0].children[0];
			},
			selectCity(index){
				this.indextwo=index;
				this.valueThree=this.cityListArr[this.indexone].children[index].children[0];
				this.optionThree=[];
				for(let i=0;i<this.cityListArr[this.indexone].children[this.indextwo].children.length;i++){
				   this.optionThree.push(this.cityListArr[this.indexone].children[this.indextwo].children[i]);
			    }
			},
			selectDistrict(index){
				this.indexthree=index;
			},
			query(){
				let distictName=null;
				if(this.cityListArr[this.valueOne].children[this.indextwo].children[this.indexthree]){
					distictName=this.cityListArr[this.valueOne].children[this.indextwo].children[this.indexthree];
				}
				let obj={
					province:this.cityListArr[this.valueOne].name,
					city:this.cityListArr[this.valueOne].children[this.indextwo].name,
					distict:distictName
				}
				this.$bus.$emit('cities',obj);
				
			}
		}
	}
</script>

<style >
	.city-box{
		height: 30px;
	}
	.city-title{
		display: block;
		float: left;
		height: 30px;
		line-height: 30px;
		text-align: center;
		line-height: 30px;
		padding: 0 5px;
		font-size: 14px;
	}
	.city-select-box{
		float: left;
		height: 30px;
		width: 130px;
		margin-right: 20px;
	}
	.el-input__inner{
		height: 30px!important;
		line-height: 30px!important;
	}
	.el-input__icon{
		line-height: 30px!important;
	}
</style>