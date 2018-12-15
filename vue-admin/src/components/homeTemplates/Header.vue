<template>
	<div id="header">
		<div class="logo">
			<img src="../../../static/images/logo.svg" alt="" />
		</div>
		
		<div class="userInfo">
			<ul>
				<li>{{userName}}</li>
				<li @click='logout'>退出</li>
			</ul>
		</div>
		<span class="currentTime">
			{{currentTime}}
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				userName:'',
				currentTime:''
			}
		},
		mounted(){
			let getInfo=window.sessionStorage.getItem('userInfo');
			if(getInfo){
				this.userName=getInfo;
			}else{
				this.$router.push('/');
			}
			//
			function handelTime(time){
				if(time>9){
					return time;
				}else{
					return '0'+time;
				}
			}
			let that=this;
			setInterval(function(){
				let d=new Date();
				that.currentTime=d.getFullYear()+'-'+handelTime(d.getMonth()+1)+'-'+handelTime(d.getDate())+'    '+handelTime(d.getHours())+':'+handelTime(d.getMinutes())+':'+handelTime(d.getSeconds());
			},1000)
		},
		methods:{
			logout(){
				window.sessionStorage.removeItem('userInfo');
                this.$router.push('/');
			}
		}
	}
</script>

<style scoped>
	#header{
		position: relative;
        height: 56px;
        min-width: 1200px;
        background: #00284d;
	}
	.logo{
		height: 56px;
        width: 200px;
	    position: fixed;
	    background: #00284d;
	}
	.logo img{
		width: auto;
		height: 50px;
		margin: 0 auto;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		position: absolute;	
	}
	.userInfo{
		height: 56px;
		float: right;
		width: auto;
	}
    .userInfo ul{
    	width: auto;
    	height: 56px;
    	float: right;
    	margin-right: 30px;
    }
    .userInfo ul li:nth-child(2):hover{
    	text-decoration: underline;
    }
    .userInfo ul li:nth-child(2){
       cursor: pointer;	
    }
    .userInfo ul li:nth-child(1){
      width: 80px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .userInfo ul li{
    	height: 56px;
    	width: 60px;
    	float: left;
    	line-height: 56px;
    	font-size: 16px;
    	color: #fff;
    	text-align: center;
    }
    .currentTime{
    	display: block;
    	float: right;
    	width: 178px;
    	line-height: 56px;
    	height: 56px;
    	text-align: center;
    	font-size: 16px;
    	color: orange;
    }
</style>