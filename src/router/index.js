import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import chinaMapdeep from '@/components/chinaMapdeep'
// import Card from '@/components/Card'
import Home from '@/components/Home'
import Circle from '@/components/Circle'
import Line from '@/components/Line'
import Trangle from '@/components/Trangle'
import SanDian from '@/components/SanDian'
import Phone from '@/components/Phone'
import worldMap from '@/components/worldMap'
import chinaMap from '@/components/chinaMap'
import Idea from '@/components/Idea'
import Relationship from '@/components/Relationship'
import wordCloud from '@/components/wordCloud'
import total from '@/components/total'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'   //跳转至登录页面
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/chinaMapdeep',
      name: 'chinaMapdeep',
      component: chinaMapdeep
    },
    // {
    //   path: '/card',
    //   name: 'card',
    //   component: Card
    // },
    {
      path: '/line',
      name: 'Line',
      component: Line
    },
    {
      path: '/circle',
      name: 'Circle',
      component: Circle
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/trangle',
      name: 'Trangle',
      component: Trangle
    },
  
    {
      path: '/sandian',
      name: 'SanDian',
      component: SanDian
    },
    {
      path: '/phone',
      name: 'Phone',
      component: Phone
    },
    {
      path: '/worldmap',
      name: 'worldmap',
      component: worldMap
    },
    {
      path: '/chinamap',
      name: 'chinamap',
      component: chinaMap
    },
    {
      path: '/idea',
      name: 'Idea',
      component: Idea
    },
    {
      path: '/wordcloud',
      name: 'wordCloud',
      component: wordCloud
    },
    {
      path: '/relationship',
      name: 'Relationship',
      component: Relationship
    },
    {
      path: '/total',
      name: 'total',
      component: total
    },
  ]
})
