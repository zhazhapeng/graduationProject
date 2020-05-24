<template>
  <!-- <div class="wrapper">这是line</div> -->
  <div class="content">
    <div class="wrapper">
      <div id="main" style="height:400px;width:600px"></div>
      <el-button round type="primary" @click="show">{{this.bool}}</el-button>
    </div>
    <div class="peizhi">
      <h3>配置表格</h3>
      <!-- <div style="margin-top:20px;">
        产品名称：
        <el-input v-model="name" class="input" placeholder="请输入产品名称" clearable></el-input>
      </div> -->
      <div style="margin-top:20px;">
        下一秒成交数量：
        <el-input v-model="value" class="input" placeholder="请输入数量" clearable></el-input>
      </div>
      <el-button style="margin-top:100px;" round type="primary" @click="add">添加</el-button>
    </div>
  </div>
</template>

<script>
var addData;
export default {
  components: {},
  data() {
    return {
      name: "",
      value: "",
      bool: "显示",
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
      var base = +new Date(2019, 2, 3);
      var oneDay = 24 * 3600 * 1000;
      var date = [];
      var d1 = Math.random() * 150;
      // var d2 = Math.random() * 150 +0.3;
      var data = [d1];
      // var now = new Date(base);
     
       addData = function (shift,tValue=0) {
       
        var time =new Date();
        var now = [time.getHours(),time.getMinutes(),time.getSeconds()].join(":");
        date.push(now);
        var lastData = data[data.length - 1];
        if(tValue!=0){
          data.push(tValue);
        }
         var nowData = (Math.random() - 0.5) * 10 + lastData;  
         data.push(nowData);  //data[data.length - 1]
        if (shift) {
          date.shift();
          data.shift();
        }
        
      }

      // 原本addDate的位置

      for (var i = 1; i < 100; i++) {
        addData();
      }

      myChart.setOption({
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date
        },
        yAxis: {
          boundaryGap: [0, "50%"],
          type: "value"
        },
        series: [
          {
            name: "成交",
            type: "line",
            smooth: true,
            symbol: "none",
            stack: "a",
            areaStyle: {
              normal: {}
            },
            data: data
          }
        ]
      });
      setInterval(function() {
        addData(true);
        myChart.setOption({
          xAxis: {
            data: date
          },
          series: [
            {
              name: "成交",
              data: data
            }
          ]
        });
      }, 500);
    
      this.bool = "隐藏";
    },
    add: function() {
      console.log(typeof addData);
      addData(true,this.value);
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

