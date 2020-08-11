<template>
  <div>
    <div class="temp_div">
      <div class="scoll red" style="float:left">
        <div id="test" style="float:left"></div>
        <!-- 数据存放在tableData中 -->
        <el-table :data="tableData" height="48%" border style="width: 70%" id="risklist">
          <el-table-column prop="date" label="日期" min-width="2%"></el-table-column>
          <el-table-column prop="name" label="姓名" min-width="2%"></el-table-column>
          <el-table-column prop="num" label="编号" min-width="2%"></el-table-column>
          <el-table-column prop="address" label="地址" min-width="8%"></el-table-column>
          <el-table-column prop="pathogeny" label="病因" min-width="2%"></el-table-column>
          <el-table-column prop="level" label="紧急情况" min-width="2%"></el-table-column>

          <el-table-column label="查看" width="115">
            <template slot-scope>
              <el-button @click="showmsg" type="text" size="small">本次</el-button>
              <el-button type="text" size="small">历史</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="popup" v-if="ifshow">
        <div @click="exitpopup">X</div>
      </div>
      <div class="scoll green"></div>
      <div class="scoll pink">
        <div id="test3" style="float:left"></div>
        <div id="test4" style="float:left"></div>
        <div id="test5" style="float:left">已经处理了{{usernub}}个</div>
        <div id="test6" style="float:left"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide",
  data() {
    return {
      usernub: 0,
      ifshow: false,
      temp: 32,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          num: "2211",
          address: "上海市普陀区金沙江路 1518 弄",
          pathogeny: "室颤",
          level: "紧急",
        },
      ],
      target: { name: "", num: "", address: "" },
    };
  },
  methods: {
    exitpopup() {
      this.ifshow = false;
    },
    //准备发起请求得到详细资料
    showmsg() {
      let con = event.target;
      let el =
        con.parentElement.parentElement.parentElement.parentElement.children;
      // console.log(el.parentElement.parentElement.parentElement.children);

      this.target.name = el[1].innerText;
      this.target.num = el[2].innerText;
      this.target.address = el[3].innerText;
      // console.log(this.target);
      //发起请求
      //{}

      //新的div模块
      this.ifshow = true;
      let showdiv = document.querySelector(".popup");
      console.log(showdiv);
      // popup.style.bottom='-100%';
    },

    pp() {
      this.temp = (Math.random() * 100).toFixed(0);
      this.drawChart();
    },
    //在初始传值后运行
    //1.正在发病人数
    drawChart1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("test"));
      // 指定图表的配置项和数据
      let option = {
        left: "center",
        tooltip: {
          formatter: "{a} <br/>{b} : {c}个人",
        },

        series: [
          {
            name: "危险人数",
            type: "gauge",
            detail: { formatter: "{value}个人" },
            //修改人数
            data: [{ value: this.tableData.length, name: "危险人数" }],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    //2.年龄和疾病关系
    drawChart3() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("test3"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "心脑血管疾病与年龄的关系",
          subtext: "基于已有数据",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["患病人数"],
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { type: ["line", "bar"] },
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["0-20", "20-30", "30-40", "40-50", "50-60", "60-70", "70-80"],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C",
          },
        },
        series: [
          {
            name: "患病人数",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    //3.病种比例
    drawChart4() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("test4"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "病种",
          subtext: "基于已有数据分析",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    //4.时间段分析
    drawChart6() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("test6"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "发病时间分析",
          subtext: "纯属虚构",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["发生时间段"],
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { type: ["line", "bar"] },
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["0-4点", "4-8点", "8-12点", "12-16点", "16-20点", "20-24点"],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C",
          },
        },
        series: [
          {
            name: " 发生时间段",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.drawChart1();
    this.drawChart3();
    this.drawChart4();
    this.drawChart6();
  },
};
</script>

<style>
#popup {
  /* background-color: red; */
  z-index: 2;
  width: 100%;
  height: 800px;
  position: fixed;
}
#risklist {
  float: left;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
#test {
  width: 30%;
  height: 50%;
}
#test3 {
  width: 50%;
  height: 50%;
}
#test4 {
  width: 50%;
  height: 50%;
}
#test5 {
  width: 50%;
  height: 50%;
}
#test6 {
  width: 50%;
  height: 50%;
}
.temp_div {
  width: 300%;
  height: 100%;
  position: relative;
  left: 0;
}
.scoll {
  width: 33.3%;
  height: 100%;
  float: left;
  z-index: 20;
}

.green {
  background-color: green;
}
/* .pink {
  background-color: pink;
} */
</style>