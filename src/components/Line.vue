<template>
  <!-- <div class="wrapper">这是line</div> -->
  <div class="content">
    <div class="wrapper">
      <div id="main" style="height:400px;width:600px"></div>
      <el-button round type="primary" @click="show">{{this.bool}}</el-button>
    </div>
    <div class="peizhi">
      <h3>配置表格</h3>
      <div style="margin-top:20px;">
        产品名称：
        <el-input v-model="name" class="input" placeholder="请输入产品名称" clearable></el-input>
      </div>
      <div style="margin-top:20px;">
        产品数量：
        <el-input v-model="value" class="input" placeholder="请输入数量" clearable></el-input>
      </div>
      <el-button style="margin-top:100px;" round type="primary" @click="add">添加</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: "",
      value: "",
      bool:"显示",
      Xdata: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      Vdata: [5, 20, 36, 10, 10, 20]
    };
  },
  methods: {
    show: function() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      myChart.setOption({
        title: { text: "柱状图展示" },
        tooltip: {},
        xAxis: {
          data: this.Xdata
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.Vdata
          }
        ]
      });
      this.bool="隐藏";
    },
    add: function() {
      if(this.name!=""){
      this.Xdata.push(this.name);
      this.Vdata.push(this.value);
      this.show();
      }else{
         this.$message.error('请输入商品名称');
      }
    }
  }
};
</script>
<style scoped>
.wrapper {
  position: relative;
  width: 70%;
  height: 500px;
  left: 10px;
}
.peizhi {
  position: absolute;
  width: 30%;
  height: 500px;
  right: 20px;
  top: 150px;
}
.input {
  width: 200px;
}
</style>