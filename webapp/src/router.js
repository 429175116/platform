import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About')
    },
    {
      // 营销页
      path: '/marketing',
      name: 'marketing',
      redirect: '/marketingCenter',
      component: () => import('@/views/Marketing'),
      // 子页跳转
      children:[{
        path: '/marketingCenter',
        name: 'marketingCenter',
        component: () => import('@/components/marketing/MarketingCenter')
      }]
    },
    {
      // 交易页
      path: '/transaction',
      name: 'transaction',
      redirect: '/dataRader',
      component: () => import('@/views/Transaction'),
      // 子页跳转
      children:[{
        // 数据雷达
        path: '/dataRader',
        name: 'dataRader',
        component: () => import('@/components/transaction/DataRader')
      },{
        // 交易概况
        path: '/tarManagement',
        name: 'tarManagement',
        component: () => import('@/components/transaction/TarManagement')
      },{
        // 收支明细
        path: '/inOrOutDetail',
        name: 'inOrOutDetail',
        component: () => import('@/components/transaction/InOrOutDetail')
      },{
        // 所哟订单
        path: '/allOrders',
        name: 'allOrders',
        component: () => import('@/components/transaction/AllOrders')
      }]
    },
    
    {
      path: '/pagetemplate',
      name: 'pagetemplate',
      component: () => import('@/views/Pageemtplate')
    }
    
  ]
})
