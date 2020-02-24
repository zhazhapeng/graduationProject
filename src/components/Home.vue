<template>

  <div class="wrapper">
    home

    
  </div>
</template>

<script>
import Header from './Common/Header'
import asideHeader from './Common/asideHeader'

export default {
   components:{
    Header,asideHeader
  },
  data() {
    return {
    };
  },
  methods: {
    // 如何跳转到一个HTML静态页面
    toHtml : function(){
      window.open("../static/tree.html")
    }
  },
};
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>