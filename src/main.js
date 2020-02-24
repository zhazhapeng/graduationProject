// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' //element-ui的全部组件
import $ from 'jquery'
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI) //使用elementUI


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
