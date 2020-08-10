<template>
  <div style="position:relative;height:100%;width:100%">
    <div style="width:100%;height:40%;" id="zexian" />
    <div style="height:15%;position: relative;top:-2%">
      <div class="point1">
        <div>
          <canvas id="mycan1" width="90" height="90" />
        </div>

        <div>health</div>
        <div>222</div>
      </div>
      <em id="Radar" class="RadarFast" v-if="data" />
      <div class="point1">
        <div />
        <div>health</div>
        <div>222</div>
      </div>
      <!-- <em id="Radar" class="RadarFast" v-if="data[data.length-1]"></em> -->
      <div class="point1">
        <div />
        <div>health</div>
        <div>222</div>
      </div>
      <!-- <em id="Radar" class="RadarFast" v-if="data[data.length-1]"></em> -->
    </div>
    <div style="height:45%;overflow: hidden;">
      <div id="lunbo" class="show2">
        <div v-for="(item,index) in tableData" :key="index" class="carecard">
          <div>{{ item.name }}</div>
          <div>{{ item.date }}</div>
          <div>
            <img src="../assets/heartbeat.png" style="width:40%;left:2%;right:2%" />
            <p class="pchild4" style="fontSize:28px">{{ item.rate }}</p>
          </div>
          <div>
            <img src="../assets/heartbeat.png" style="width:40%;left:2%;right:2%" />
            <p class="pchild4" style="fontSize:28px">{{ item.heartbeat }}</p>
          </div>
          <div>{{ item.address }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intime",
  data() {
    return {
      timer1: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          rate: "66",
          heartbeat: "78",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          rate: "66",
          heartbeat: "78",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          rate: "66",
          heartbeat: "78",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          rate: "66",
          heartbeat: "78",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          rate: "66",
          heartbeat: "78",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          rate: "66",
          heartbeat: "78",
        },
      ],
      discomfort: 0,
      warning: 0,
      danger: 0,
      inline: 20,
      data: 1,
      jishi: 0,
      zexianArrA: [],
      //折线图的x轴
      zexianArrB: [],
      //折线图的第一个曲线数据
      zexianArrC: [],
      //折线图的第二个曲线数据
    };
  },
  props: ["postdate"],
  watch: {
    postdate: {
      handler() {
        // console.log(newVal, oldVal);
        //修改数据 发送请求
        let myChart = this.$echarts.init(document.getElementById("zexian"));
        if (this.zexianArrA.length < 6) {
          this.zexianArrA.push(this.postdate.fen + ":" + this.postdate.miao);

          this.zexianArrB.push(Math.ceil(Math.random() * 400));
          this.zexianArrC.push(Math.ceil(Math.random() * 400));
        } else {
          this.zexianArrA.push(this.postdate.fen + ":" + this.postdate.miao);
          this.zexianArrA.shift();
          this.zexianArrB.push(Math.ceil(Math.random() * 400));
          this.zexianArrB.shift();
          this.zexianArrC.push(Math.ceil(Math.random() * 400));
          this.zexianArrC.shift();
        }
        myChart.setOption({
          xAxis: {
            data: this.zexianArrA,
          },
          series: [
            {
              name: "注册总量",
              data: this.zexianArrB,
            },
            {
              name: "成交",
              data: this.zexianArrC,
            },
          ],
        });
        //发送请求
        this.jishi++;
        if (this.jishi == 6) {
          let temp = 0;
          let lunbo = document.querySelector("#lunbo");
          var that = this;
          that.timer1 = setInterval(function () {
            temp--;
            lunbo.style.top = temp + "%";
            if (temp == -50) {
              clearInterval(that.timer1);
            }
          }, 10);
          this.tableData = [
            {
              date: "2016-22-02",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄",
              rate: "66",
              heartbeat: "78",
            },
            {
              date: "2016-05-02",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄",
              rate: "32",
              heartbeat: "128",
            },
            {
              date: "2016-05-02",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄",
              rate: "632",
              heartbeat: "78",
            },
            {
              date: "2016-05-02",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄",
              rate: "66",
              heartbeat: "7238",
            },
            {
              date: "201236-05-02",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄",
              rate: "66",
              heartbeat: "78",
            },
            {
              date: "2016-05-02",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄",
              rate: "66",
              heartbeat: "72138",
            },
          ];

          this.jishi = 0;
        }
      },
      deep: true,
    },
  },
  methods: {
    gettime() {},
    //旋转特效
    usecan(divid, color) {
      let mycan = document.querySelector(divid);
      var context = mycan.getContext("2d");
      context.lineWidth = 3;
      context.strokeStyle = color;

      context.beginPath();
      context.arc(45, 45, 50, 0, Math.PI / 4, false);
      context.stroke();

      context.beginPath();
      context.arc(45, 45, 50, Math.PI / 2, (Math.PI * 3) / 4, false);
      context.stroke();

      context.beginPath();
      context.arc(45, 45, 50, Math.PI, (Math.PI * 5) / 4, false);
      context.stroke();

      context.beginPath();
      context.arc(45, 45, 50, (Math.PI * 3) / 2, (Math.PI * 7) / 4, false);
      context.stroke();
    },

    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("zexian"));
      // 指定图表的配置项和数据
      let option = (option = {
        backgroundColor: "rgba(0,0,0,0)",
        title: {
          text: "使用人数和在线人数",
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 20,
          },
          top: "5%",
          left: "center",
        },
        legend: {
          show: true,
          right: "0",
          top: "8",
          width: "25%",
          textStyle: {
            color: "rgba(37, 154, 183, 1)",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "15%",
          left: "5%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
            },
            splitArea: {
              // show: true,
              color: "#f00",
              lineStyle: {
                color: "#f00",
              },
            },
            axisLabel: {
              color: "#fff",
            },
            splitLine: {
              show: false,
            },
            boundaryGap: false,
            data: [],
          },
        ],

        yAxis: [
          {
            type: "value",
            min: 0,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
              margin: 20,
              textStyle: {
                color: "#d1e6eb",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "注册总量",
            type: "line",
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 8,

            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#6c50f3",
              },
            },
            itemStyle: {
              color: "#6c50f3",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
            tooltip: {
              show: false,
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(108,80,243,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(108,80,243,0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(108,80,243, 0.9)",
                shadowBlur: 20,
              },
            },
            data: [],
          },
          {
            name: "使用人数",
            type: "line",
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 8,

            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#00ca95",
              },
            },

            itemStyle: {
              color: "#00ca95",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
            tooltip: {
              show: false,
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,202,149,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,202,149,0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(0,202,149, 0.9)",
                shadowBlur: 20,
              },
            },
            data: [],
          },
        ],
      });
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    //触发绘图时间
    this.drawChart();
    // this.changedata();
    this.usecan("#mycan1", "#1AE66B");
  },
};
</script>

<style>
#mycan1 {
  animation: 2s myfirst linear infinite;
  position: relative;
}
@keyframes myfirst {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.point1 {
  float: left;
  width: 30%;
  height: 100%;
  background: hsla(0, 0%, 100%, 0.3);
  position: relative;
  margin-left: 2%;
  border-radius: 20%;
}
.point1::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  filter: blur(20px);
  margin: -30px;
}
.point1 > :nth-child(1) {
  height: 70%;
  width: 70%;
  position: relative;
  left: 16%;
  top: 5%;
}
.point1 > :nth-child(2) {
  position: relative;
  bottom: 38%;
  font-size: 20px;
}
.point1 > :nth-child(3) {
  position: relative;
  bottom: 10%;
  font-size: 26px;
}
/* .pchild4 {
  position: relative;
  top: -100%;
  left: 38%;
} */
.carecard {
  float: left;
  width: 40%;
  background-color: slategray;
  margin: 1%;
  padding: 1%;
  height: 45%;
  position: relative;
  border-radius: 10px;
}
.carecard > :nth-child(1) {
  position: absolute;
  top: 8%;
  left: 8%;
}
.carecard > :nth-child(2) {
  position: absolute;
  top: 8%;
  right: 8%;
}
.carecard > :nth-child(3) {
  position: absolute;
  top: 20%;
  left: -7%;
  width: 50%;
  height: 40%;
}
.carecard > :nth-child(4) {
  position: absolute;
  top: 20%;
  right: 5%;
  width: 50%;
  height: 40%;
  /* font-size: ; */
}
.carecard > :nth-child(5) {
  position: absolute;
  bottom: 10%;
  left: 8%;
}

.show2 {
  width: 100%;
  height: 100%;
  display: inline-block;
  padding-left: 4%;
  position: relative;
  top: 0%;
}

/* 雷达动画 */
.RadarFast {
  position: absolute;
  z-index: 10;
  left: 67%;
  top: 41%;
  margin-left: -3px;
}
.RadarFast:after {
  content: "";
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 0 20px 10px red;
  top: 50%;
  left: 50%;
  margin-left: -140px;
  z-index: 3;
  opacity: 0;
  -webkit-animation: Fast 0.5s 0.5s infinite ease-out;
  -moz-animation: Fast 0.5s 0.5s infinite ease-out;
  animation: Fast 0.5s 0.5s infinite ease-out;
}
@-webkit-keyframes Fast {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
  }
}
@-moz-keyframes Fast {
  0% {
    opacity: 0;
    -moz-transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -moz-transform: scale(1.2);
  }
}
@-ms-keyframes Fast {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes Fast {
  0% {
    opacity: 0;
    -o-transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -o-transform: scale(1.2);
  }
}
@keyframes Fast {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}
</style>