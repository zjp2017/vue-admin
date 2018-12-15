<template>
	<div id="side">
		<el-aside width="200px" style="background-color: rgb(238, 241, 246)" class='side-content'>
		    <el-menu :default-openeds="['1']"  @open="handleOpen" @close="handleClose" @select="handleselect">
		      <el-submenu index="1">
		        <template slot="title"><i class="el-icon-message"></i>全局总览</template>
		        <el-menu-item-group>
		          <el-menu-item index="overview">完成情况</el-menu-item>
		          <el-menu-item index="line">线路查询</el-menu-item>
		          <el-menu-item index="class">班次查询</el-menu-item>
		          <el-menu-item index="network">网点查询</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-submenu index="2">
		        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
		        <el-menu-item-group>
		          <el-menu-item index="2-1">选项1</el-menu-item>
		          <el-menu-item index="2-2">选项2</el-menu-item>
		          <el-menu-item index="2-3">选项3</el-menu-item>
		          <el-menu-item index="2-4">选项4</el-menu-item>
		          <el-menu-item index="2-5">选项5</el-menu-item>
		          <el-menu-item index="2-6">选项6</el-menu-item>
		        </el-menu-item-group>

		      </el-submenu>
		      <el-submenu index="3">
		        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
		        <el-menu-item-group>
		          <el-menu-item index="3-1">选项1</el-menu-item>
		          <el-menu-item index="3-2">选项2</el-menu-item>
		          <el-menu-item index="3-3">选项1</el-menu-item>
		          <el-menu-item index="3-4">选项2</el-menu-item>
		          <el-menu-item index="3-5">选项1</el-menu-item>
		          <el-menu-item index="3-6">选项2</el-menu-item>
		          <el-menu-item index="3-7">选项1</el-menu-item>
		          <el-menu-item index="3-8">选项2</el-menu-item>
		          <el-menu-item index="3-9">选项1</el-menu-item>
		          <el-menu-item index="3-10">选项22222</el-menu-item>
		        </el-menu-item-group>
		       
		      </el-submenu>
		    </el-menu>
	   </el-aside>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			handleOpen(key, keyPath) {
//		        console.log(key);
//		        console.log(keyPath);
		      },
		      handleClose(key, keyPath) {
//		        console.log(key, keyPath);
		      },
		      handleselect(key, keyPath){
		      	 console.log(key);
		      	 this.$router.push(keyPath[1]);
		        console.log(keyPath);
		      }
		}
	}
</script>

<style  >
	.el-menu{
		border-right:none;
		background: #001529!important;
	}
	#side{
		position: fixed;
        left: 0;
        top: 56px;
        bottom: 0;
        width: 200px;
        z-index: 100;
	}
	.el-submenu .el-menu-item {
		box-sizing: border-box; 
	}
	.el-menu-item.is-active {
      background: #409EFF!important;
      color: #fff!important;
    }
	.side-content{
		position: relative;
        width: 200px;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        background: #001529!important;
	}
	.el-submenu .el-menu {
	   background: #001529!important;
	}
	.el-submenu:hover{
        color: #fff;
	}
	.el-submenu .el-submenu__title{
		color: #fff;
	}
	.el-submenu__title:hover{
		color: #fff;
		background-color:#001529!important;
	}
    .el-menu-item:hover{
		color: #fff;
		background-color:#1890ff!important;
	}
	.el-menu-item{
		color:#fff;
	}
	.el-submenu .el-menu-item{
		padding-left:59px!important;
	}
	.el-submenu__title{
		height: 50px!important;
		line-height: 50px!important;
	}
	.el-menu-item-group__title{
		padding: 0;
	}
	/*去掉滚动条*/
	.side-content::-webkit-scrollbar { width: 0 !important }
	.side-content { -ms-overflow-style: none; }
	.side-content { overflow: -moz-scrollbars-none; }
</style>