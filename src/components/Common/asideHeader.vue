<template>
  <!-- 侧边导航栏 -->
  <el-container>
    <el-aside width="200px">
      <el-row>
        <el-col :span="12">
          <!-- 折叠展开 -->
          <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>-->

          <!-- <el-switch v-model="isCollapse" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
          <el-menu
            default-active="this.$route.path"
            class="el-menu-vertical-demo menu"
            @open="handleOpen"
            @close="handleClose"
            background-color="#303133"
            text-color="#fff"
            :collapse="isCollapse"
            active-text-color="#ffd04b"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>常规数据可视化</span>
              </template>
               <el-submenu index="1-1">
                <template slot="title">低维数据</template>
                <el-menu-item index="/line">柱状图</el-menu-item>
              <el-menu-item index="/circle">饼状图</el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">高维数据</template>
               <el-menu-item index="/sandian">散点图</el-menu-item>
              </el-submenu>
              <el-submenu index="1-3">
                <template slot="title">层次数据</template>
                <el-menu-item index="/idea">思维导图</el-menu-item>
              </el-submenu>
              <el-submenu index="1-4">
                <template slot="title">网络数据</template>
                 <el-menu-item index="/relationship">力导向图</el-menu-item>
              </el-submenu>
            <el-submenu index="1-5">
                <template slot="title">时序数据</template>
                <el-menu-item index="/trangle">模拟实时成交量</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>结合地图</span>
              </template>
              <el-menu-item index="/worldmap">世界疫情(2020.4.5)分布图</el-menu-item>
              <el-menu-item index="/chinamap">中国PM2.5分布散点图</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span>当今热门</span>
              </template>
              <el-menu-item index="/wordCloud">词云</el-menu-item>
             <el-menu-item index="/total">具体使用场景</el-menu-item>
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
      isCollapse: false
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
    toHtml() {
      window.open("../static/Future.html", "_self");
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>