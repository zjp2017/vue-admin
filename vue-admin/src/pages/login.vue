<template>
    <div id="login">
        <div class="login-div">
            <h3>欢迎登陆</h3>
            <div class="userNameDiv">
                <span class="username"></span>
                <input type="text" placeholder="请输入用户名" v-model="username"/>
            </div>
            <div class="passwordDiv">
                <span class="password"></span>
                <input type="text" placeholder="请输入密码" v-model="password"/>
            </div>
            <span class="login-btn" onselectstart="return false" @click="loginClick">登录</span>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            loginClick(){
                if(this.username.length>0||this.password.length>0){
                    let  user = (this.username).replace(/(^\s*)|(\s*$)/g, '');
                    let  pass = (this.password).replace(/(^\s*)|(\s*$)/g, '');
                    if (user == '' || user == undefined || user == null||pass == '' || pass == undefined || pass == null) {
                         this.$message({
                           message: '用户名或者密码不能为空！',
                           type: 'error',
                           duration:2000
                         });
                    } else {
                        window.sessionStorage.setItem('userInfo',this.username);
                        this.$router.push('/overview');
                    }  
                }else{
                    this.$message({
                         message: '用户名或者密码不能为空！',
                         type: 'error',
                         duration:2000
                     });
                }  
            }
        }
    }
</script>
 
<style>
#login{
    width: 100%;
    height: 100%;
    background-image: url('../../static/images/bg.jpg');
    position: relative;
}
.login-div{
    width: 400px;
    height: 500px;
    padding: 35px;
    color: #EEE;
    position: absolute;
    left: 50%;
    top: 57%;
    margin-left: -200px;
    margin-top: -250px;
}
.login-div h3{
    text-align: center;
    height: 20px;
    font: 20px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei",sans-serif;
    color: #FFFFFF;
    height: 20px;
    line-height: 20px;
    padding: 0 0 35px 0;
}
.userNameDiv {
    height: 46px;
    padding: 0 5px;
    margin-bottom: 30px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
    background: #fff;
    width: 330px;
}
.userNameDiv span{
    display: block;
    float: left;
    height: 100%;
    width: 30px;
      
}
.passwordDiv span{
    display: block;
    float: left;
    height: 100%;
    width: 30px;
     
}
.userNameDiv .username{
    background-image: url('../../static/images/user.svg');
    background-repeat: no-repeat;
    height: 24px;
    margin: 9px 0 0px 10px;
}
.passwordDiv .password{
    background-image: url('../../static/images/password.svg');
    background-repeat: no-repeat;
    height: 24px;
    margin: 9px 0 0px 10px;
}
.userNameDiv input{
    display: block;
    float: left;
    height: 40px;
    width: 256px;
    margin-left: 10px;
    outline: none;
    font-size: 15px;
    border: none;
}
.passwordDiv input{
    display: block;
    float: left;
    height: 40px;
    width: 256px;
    margin-left: 10px;
    outline: none;
    font-size: 15px;
    border: none;
}
.passwordDiv {
	width: 330px;
    height: 46px;
    padding: 0 5px;
    margin-bottom: 30px;
    border-radius: 50px;
    position: relative;
    border: rgba(255,255,255,0.2) 2px solid !important;
    background: #fff;
}
.login-btn{
    display: block;
    padding: 15px;
    margin-top: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 20px;
    border-radius: 50px;
    background: #0096e6;
    cursor: pointer;
}
</style>