import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/login'
import HomePage from '@/pages/home'
import  OverViewPage from '@/components/routerTemplates/overview/Overview.vue'
import  LinePage from '@/components/routerTemplates/lineStatic/lineStatic.vue'
import  ClassPage from '@/components/routerTemplates/class/class.vue'
import  NetworkPage from '@/components/routerTemplates/network/network.vue'
import  classDetailPage from '@/components/routerTemplates/class/classDetail.vue'
Vue.use(Router)
const router=new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
      children:[
      	{
      		 path: '/login',
		       component: LoginPage,
      	}
      ]
    },
    {
    	//detail
      path: '/home',
      name: 'home',
      component: HomePage,
      children:[
      	{
	       path: '/overview',
	       name: 'overview',
	       component: OverViewPage
    		},
    		{
	       path: '/line',
	       name: 'line',
	       component: LinePage
    		},
    		{
	       path: '/class',
	       name: 'class',
	       component: ClassPage
    		},
    		{
	       path: '/network',
	       name: 'network',
	       component: NetworkPage
    		}
    		
      ]
    },
    {
	       path: '/detail/:id',
	       name: 'detail',
	       component: classDetailPage
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
const whitelist=['home'];
router.beforeEach((to,from,next)=>{
    if(whitelist.indexOf(to.name)>-1){
        let getUserInfor=window.sessionStorage.getItem('userInfo');
        if(getUserInfor){
             next();
        }else{
             router.push({ path: '/',name: 'login' ,component: LoginPage});
        }
    }else{
        next();
    }
     
})
export default router;
