<template>
  <div id="app">
   <!-- 导航区域 -->
    <Header/>
    <asideHeader />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from '@/components/Common/Header'
import asideHeader from '@/components/Common/asideHeader'
export default {
  name: 'App',
  components:{
    Header,asideHeader
  }
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    margin-left: 0px;
  }
</style>
