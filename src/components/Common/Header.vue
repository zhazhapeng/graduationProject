<template>
<!-- 大学生综合测评系统 -->
<el-container>
  <!-- 头部导航 -->
  <el-header>
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo header"
        mode="horizontal"
        @select="handleSelect"
        background-color="#303133"
        text-color="#fff"
        active-text-color="#ffd04b">
         大鹏的毕设
        <!-- <el-menu-item v-for="(list, index) in headerList" index="list.id" :key="list.id">
              <router-link :to="{name:list.name}">
                {{ list.title }}
              </router-link>
            </el-menu-item> -->

        </el-menu>
        
  </el-header>
</el-container>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        headerList:[
            {id: '1', name: 'Home', title: '首页'},
          {id: '2', name: 'Line', title: '线'},
          {id: '3', name: 'Circle', title: '圆'},
          {id: '4', name: 'Trangle', title: '长方形'}
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
       handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color:  #333;
    color: #FFF;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  
  
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-col-12{
      width: 100%;
       height: 100%;
  }
  .el-container{
      height: 100%;
  }
</style>