import Vue from 'vue'
import App from './App.vue'

//Step1:引入
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false


//Step2:導入組件
import HomeView from '../src/components/HomeView/HomeView.vue'
import AssortView from '../src/components/AssortView/AssortView.vue'
import SearchView from '../src/components/SearchView/SearchView.vue'
import CartView from '../src/components/CartView/CartView.vue'
import MyView from '../src/components/MyView/MyView.vue'

//Step3:定義路由規則

var myRoutesRules=[
  {
    path:'/', //默認根目錄也到首頁
    component:HomeView 
  },
  {
    path:'/home', //不用加.
    component:HomeView //是元件不用''
  },
  {
    path:'/assort',
    component:AssortView
  },
  {
    path:'/search',
    component:SearchView
  },
  {
    path:'/cart',
    component:CartView
  },
  {
    path:'/mine',
    component:MyView
  }
]

//Step4:創建路由實體化

var router=new VueRouter({
  routes:myRoutesRules
}

)

new Vue({
  render: h => h(App),
  //Step5:添加路由對象
  router

}).$mount('#app')
