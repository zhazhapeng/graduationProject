<template>
  <div class="wrapper">
    <svg width="960" height="600" >
    </svg>
    <div class="peizhi">
      <h3>配置表格</h3>
      <!-- <div style="margin-top:20px;">
        产品名称：
        <el-input v-model="name" class="input" placeholder="请输入产品名称" clearable></el-input>
      </div> -->
      <div style="margin-top:20px;">
        产品数量：
        <el-input v-model="value" class="input" placeholder="请输入数量" clearable></el-input>
      </div>
      <el-button style="margin-top:100px;" round type="primary" @click="add">添加</el-button>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import * as cloud from "d3-cloud";
// var d3 = require('d3');
export default {
  components: {},
  data() {
    return {
        data:["dapeng","haha","66666","zhutou"],
        value:"",
    };
  },
  mounted() {
    this.show();
  },
  methods: {
    show: function() {
      // console.log(d3.svg.diagonal);
     var marge = {top:60,bottom:60,left:60,right:60}
    	var svg = d3.select("svg")
    	var width = svg.attr("width")
    	var height = svg.attr("height")
        
        

        // new

  const color = d3.scaleOrdinal(d3.schemeCategory10);
  const layout = cloud()
    .size([500, 500])
    .words(
      this.data.map(function(d) {
        return { text: d, size: 10 + Math.random() * 90 };
      })
    )
    .padding(5)
    .rotate(function() {
      return Math.random() * 45;
    })
    .font('Impact')
    .fontSize(function(d) {
      return d.size;
    })
    .on('end', draw);

  layout.start();




  function draw(words) {
    svg
      .append('g')
      .attr('transform', `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
      .selectAll('text')
      .data(words)
      .enter()
      .append('text')
      .attr('fill', (_, i) => color(i))
      .style('font-size', function(d) {
        return `${d.size}px`;
      })
      .style('font-family', 'Impact')
      .attr('text-anchor', 'middle')
      .attr('transform', function(d) {
        return `translate(${[d.x, d.y]})rotate(${d.rotate})`;
      })
      .text(function(d) {
        return d.text;
      });
  }

    },
     add: function() {
      var list = this.value.split(' ');
          this.data.concat(list);
      this.show();
    }
  }
};
</script>





<style scoped>
.peizhi {
  position: absolute;
  width: 30%;
  height: 500px;
  right: 20px;
  top: 150px;
}
.input {
  width: 400px;
}
</style>