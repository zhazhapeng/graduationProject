<template>
  <!-- <div class="wrapper">这是line</div> -->
  <div class="content">
    <div class="wrapper">
      <div id="main" style="height:400px;width:600px"></div>
      <el-button style="margin-top:20px;" round type="primary" @click="show">{{this.bool}}</el-button>
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
      <el-button style="margin-top:120px;" round type="primary" @click="add">添加</el-button>
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
      data: [
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ],
    };
  },
  methods: {
    show: function() {
      var echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      // 绘制图表
      // 图表加载动画
      // myChart.showLoading();  
      // myChart.hide();
      myChart.setOption({
        title: { text: "访问来源" },
        backgroundColor: '#2c343c',
        visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:this.data,
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
        ]
      });
      this.bool="隐藏";
    },
    add: function() {
     this.data.push({value:this.value,name:this.name});
      this.show();
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
  top: 15px;
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