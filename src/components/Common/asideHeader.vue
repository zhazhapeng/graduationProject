<template>
  <!-- 侧边导航栏 -->
  <el-container>
    <el-aside width="200px">
      <el-row>
        <el-col :span="12">
          <el-menu
            default-active="this.$route.path"
            class="el-menu-vertical-demo menu"
            @open="handleOpen"
            @close="handleClose"
            background-color="#303133"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>传统展示</span>
              </template>
                <el-menu-item index="/line">柱状图</el-menu-item>
                <el-menu-item index="/circle">饼状图</el-menu-item>
                <el-menu-item index="/sandian">散点图</el-menu-item>
                <el-menu-item index="/total">具体使用场景</el-menu-item>
              <!-- 分组2 -->
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>结合地图</span>
              </template>
                <el-menu-item index="/worldmap">世界人口分布热力图</el-menu-item>
                <el-menu-item index="/chinamap">中国PM2.5分布散点图</el-menu-item>
            </el-submenu>

          <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span>如今展示</span>
              </template>
                <el-menu-item index="/wordCloud">词云</el-menu-item>
                <el-menu-item index="/relationship">关系图</el-menu-item>
                <el-menu-item index="/idea">思维导图</el-menu-item>
                <el-menu-item index="/trangle">模拟实时成交量</el-menu-item>
            </el-submenu>


             <el-menu-item index="4">
              <i class="el-icon-s-promotion"></i>
              <span slot="title" @click="toHtml">未来</span>
            </el-menu-item>

          </el-menu> 
        </el-col>
      </el-row>
    </el-aside>
    <!-- 路由出口-右侧显示部分 -->
    <el-col :span="24" class="content-wrapper">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-col>
  </el-container>
</template>
<script>
export default {
  name: "asideHeader",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
     
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
    },
    toHtml(){
      window.open("../static/Future.html","_self")
    }
  }
};
</script>



<style scoped>
.el-header,
.el-footer {
  /* background-color: red; */
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #303133;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 650px;
}

.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-col-12 {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
}
</style>