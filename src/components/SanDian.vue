<template>
  <!-- <div class="wrapper">这是line</div> -->
  <div class="content">
    <div class="wrapper">
      <div id="main" style="height:600px;width:1000px"></div>
      <el-button round type="primary" @click="show">{{this.bool}}</el-button>
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
    };
  },
  methods: {
    show: function() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
     var data1 = [];
      var data2 = [];
      var data3 = [];

      var random = function (max) {
          return (Math.random() * max).toFixed(3);
      };

      for (var i = 0; i < 500; i++) {
          data1.push([random(15), random(10), random(1)]);
          data2.push([random(10), random(10), random(1)]);
          data3.push([random(15), random(10), random(1)]);
      }
     
      var option = {
          animation: false,
          legend: {
              data: ['微生物1', '微生物2', '微生物3']
          },
          tooltip: {
          },
          xAxis: {
              type: 'value',
              min: 'dataMin',
              max: 'dataMax',
              splitLine: {
                  show: true
              }
          },
          yAxis: {
              type: 'value',
              min: 'dataMin',
              max: 'dataMax',
              splitLine: {
                  show: true
              }
          },
          dataZoom: [
              {
                  type: 'slider',
                  show: true,
                  xAxisIndex: [0],
                  start: 1,
                  end: 35
              },
              {
                  type: 'slider',
                  show: true,
                  yAxisIndex: [0],
                  left: '93%',
                  start: 29,
                  end: 36
              },
              {
                  type: 'inside',
                  xAxisIndex: [0],
                  start: 1,
                  end: 35
              },
              {
                  type: 'inside',
                  yAxisIndex: [0],
                  start: 29,
                  end: 36
              }
          ],
          series: [
              {
                  name: '微生物1',
                  type: 'scatter',
                  itemStyle: {
                      normal: {
                          opacity: 0.8
                      }
                  },
                  symbolSize: function (val) {
                      return val[2] * 40;
                  },
                  data: data1
              },
              {
                  name: '微生物2',
                  type: 'scatter',
                  itemStyle: {
                      normal: {
                          opacity: 0.8
                      }
                  },
                  symbolSize: function (val) {
                      return val[2] * 40;
                  },
                  data: data2
              },
              {
                  name: '微生物3',
                  type: 'scatter',
                  itemStyle: {
                      normal: {
                          opacity: 0.8,
                      }
                  },
                  symbolSize: function (val) {
                      return val[2] * 40;
                  },
                  data: data3
              }
          ]
      };
      myChart.setOption(option);
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