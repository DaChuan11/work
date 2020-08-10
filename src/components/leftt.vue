<template>
  <div>
    <div id="people" />
    <p style="position: relative;top:-29%;fontSize:18px;color:#273">近日发病人数</p>

    <div id="badtime" />
    <p style="position: relative;top:-26%;fontSize:18px;color:#273;left:30%">发病总人数：{{ fabingrensu }}</p>
    <p style="position: relative;top:-26%;fontSize:18px;color:#273;left:41%;fontSize:8px">单位：%</p>

    <div id="age" />
  </div>
</template>

<script>
export default {
  name: "Leftt",
  data() {
    return {
      fabingrensu: "",
    };
  },
  methods: {
    draw() {
      let myChart = this.$echarts.init(document.getElementById("people"));
      let data = [
          { time: "1-23", num: 24 },
          { time: "1-24", num: 16 },
          { time: "1-25", num: 50 },
          { time: "1-26", num: 80 },
          { time: "1-28", num: 72 },
        ],
        xData = [],
        yData = [];

      data.map((v) => {
        xData.push(v.time);
        yData.push(v.num);
      });
      let option = {
        backgroundColor: "rgba(0,0,0,0)",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
              fontSize: 12,
            },
          },
          textStyle: { fontSize: "100%" },
          formatter: (v) => {
            return `
              <div class='u-p-2'>
                <div class='fz-10'>日期：${v[0].axisValue}</div>
                <div class='fz-10 u-mt-2'>人数：${v[0].value}</div>
              </div>
            `;
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false, // 两边留白
          axisLabel: { textStyle: { color: "#fff", fontSize: 14 } },
          data: xData,
          axisLine: { lineStyle: { color: "#000", width: 1 } },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(255,255,255,.2)",
              width: 1,
            },
            show: true,
          },
        },
        yAxis: {
          name: "人",
          type: "value",
          scale: true,
          nameTextStyle: {
            color: "rgba(255,255,255,.5)",
            align: "right",
            padding: [0, 10, 0, 0],
            fontSize: "100%",
          },
          axisLabel: {
            textStyle: { color: "#fff", fontSize: "100%" },
            margin: 8,
          },
          axisLine: { lineStyle: { color: "#000", width: 1 } },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "rgba(255,255,255,.2)",
              width: 1,
            },
            show: true,
          },
        },
        series: {
          name: "",
          type: "line",
          itemStyle: { normal: { label: { show: true } } },
          stack: "",
          // 修改的是线下区域的颜色
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(236, 99, 123, .5)",
              },
              {
                offset: 1,
                color: "rgba(102, 212, 250,.0)",
              },
            ]),
          },
          // 修改的是线的颜色
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 1,
              x2: 0,
              y2: 0,
              // 0% 处的颜色                           // 100% 处的颜色
              colorStops: [
                { offset: 0, color: "#3a76f6" },
                { offset: 0.25, color: "#66d4fa" },
                { offset: 0.75, color: "#f8d470" },
                { offset: 1, color: "#ec637b" },
              ],
              global: false, // 缺省为 false
            },
            width: 2,
          },
          //图例样式，默认空心圆，设为none是实心，还有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
          symbol: "roundRect",
          data: yData,
        },
        grid: {
          x: 60,
          y: 40,
          x2: 20,
          y2: 30,
        },
      };
      myChart.setOption(option);
    },
    draw2() {
      let myChart = this.$echarts.init(document.getElementById("badtime"));
      // 绘制左侧面
      const CubeLeft = this.$echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint;
          const c0 = [shape.x, shape.y];
          const c1 = [shape.x - 9, shape.y - 9];
          const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
          const c3 = [xAxisPoint[0], xAxisPoint[1]];
          ctx
            .moveTo(c0[0], c0[1])
            .lineTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .closePath();
        },
      });
      const CubeRight = this.$echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint;
          const c1 = [shape.x, shape.y];
          const c2 = [xAxisPoint[0], xAxisPoint[1]];
          const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
          const c4 = [shape.x + 18, shape.y - 9];
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
        },
      });
      const CubeTop = this.$echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const c1 = [shape.x, shape.y];
          const c2 = [shape.x + 18, shape.y - 9];
          const c3 = [shape.x + 9, shape.y - 18];
          const c4 = [shape.x - 9, shape.y - 9];
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
        },
      });
      this.$echarts.graphic.registerShape("CubeLeft", CubeLeft);
      this.$echarts.graphic.registerShape("CubeRight", CubeRight);
      this.$echarts.graphic.registerShape("CubeTop", CubeTop);
      const VALUE = [2012, 1230, 3790, 2349, 1654, 1230];
      let temp = 0;
      for (let i = 0; i < VALUE.length; i++) {
        temp += VALUE[i];
      }
      this.fabingrensu = temp;
      let MAX = [];
      for (let i = 0; i < 6; i++) {
        MAX.push(temp);
      }
      let maxpo = [];
      for (let i = 0; i < 6; i++) {
        let bai = Math.round((VALUE[i] / temp) * 100);
        maxpo.push(bai);
      }
      console.log(maxpo);
      let option = {
        backgroundColor: "rgba(0,0,0,0)",
        title: {
          text: "发病时间统计",
          top: 32,
          left: 18,
          textStyle: {
            color: "#00F6FF",
            fontSize: 24,
          },
        },
        grid: {
          x: 20,
          y: 80,
          x2: 20,
          y2: 40,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["0-3", "3-6", "3-6", "3-6", "3-6", "3-6"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "white",
            },
          },
          offset: 20,
          axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
              color: "#7DFFFD",
            },
          },
          axisLabel: {
            fontSize: 10,
          },
        },
        yAxis: {
          type: "value",
          show: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            type: "custom",
            renderItem: function (params, api) {
              const location = api.coord([api.value(0), api.value(1)]);
              return {
                type: "group",
                children: [
                  {
                    type: "CubeLeft",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(7,29,97,.6)",
                    },
                  },
                  {
                    type: "CubeRight",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(10,35,108,.7)",
                    },
                  },
                  {
                    type: "CubeTop",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "rgba(11,42,106,.8)",
                    },
                  },
                ],
              };
            },
            data: MAX,
          },
          {
            type: "custom",
            renderItem: (params, api) => {
              const location = api.coord([api.value(0), api.value(1)]);
              return {
                type: "group",
                children: [
                  {
                    type: "CubeLeft",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new this.$echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 0,
                            color: "#3B80E2",
                          },
                          {
                            offset: 1,
                            color: "#49BEE5",
                          },
                        ]
                      ),
                    },
                  },
                  {
                    type: "CubeRight",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new this.$echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 0,
                            color: "#3B80E2",
                          },
                          {
                            offset: 1,
                            color: "#49BEE5",
                          },
                        ]
                      ),
                    },
                  },
                  {
                    type: "CubeTop",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new this.$echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 0,
                            color: "#3B80E2",
                          },
                          {
                            offset: 1,
                            color: "#49BEE5",
                          },
                        ]
                      ),
                    },
                  },
                ],
              };
            },
            data: VALUE,
          },
          {
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top",
                fontSize: 16,
                color: "#fff",
                offset: [4, -80],
              },
            },
            itemStyle: {
              color: "transparent",
            },
            data: maxpo,
          },
        ],
      };
      myChart.setOption(option);
    },
    draw3() {
      let myChart = this.$echarts.init(document.getElementById("age"));
      var trafficWay = [
        {
          name: "20-40",
          value: 20,
        },
        {
          name: "40-60",
          value: 10,
        },
        {
          name: "60-70",
          value: 30,
        },
        {
          name: "70-80",
          value: 40,
        },
      ];

      var data = [];
      var color = [
        "#00ffff",
        "#00cfff",
        "#006ced",
        "#ffe000",
        "#ffa800",
        "#ff5b00",
        "#ff3000",
      ];
      for (var i = 0; i < trafficWay.length; i++) {
        data.push(
          {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i],
              },
            },
          },
          {
            value: 2,
            name: "",
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                color: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0,
              },
            },
          }
        );
      }
      var seriesOption = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [60, 60],
          hoverAnimation: true,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "#ddd",
                formatter: function (params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < trafficWay.length; i++) {
                    total += trafficWay[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return (
                      "年龄段：" +
                      params.name +
                      "\n" +
                      "\n" +
                      "占比：" +
                      percent +
                      "%"
                    );
                  } else {
                    return "";
                  }
                },
              },
              labelLine: {
                length: 30,
                length2: 20,
                show: true,
                color: "#00ffff",
              },
            },
          },
          data: data,
        },
      ];
      let option = {
        backgroundColor: "rgba(0,0,0,0)",
        color: color,
        title: {
          text: "发病年龄",
          top: "45%",
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "400",
          },
        },

        graphic: {
          elements: [
            {
              type: "image",
              z: 3,
              style: {
                width: 178,
                height: 178,
              },
              left: "center",
              top: "center",
              position: [100, 100],
            },
          ],
        },
        tooltip: {
          show: false,
        },
        legend: {
          icon: "circle",
          orient: "horizontal",
          // x: 'left',
          data: ["20-40", "40-60", "60-70", "70-80"],
          right: 0,
          bottom: 10,
          align: "right",
          textStyle: {
            color: "#fff",
          },
          width:'30%',
          itemGap: 10,
        },
        toolbox: {
          show: true,
        },
        series: seriesOption,
      };
      myChart.setOption(option);
      //动态按钮
      let currentIndex = -1;
      setInterval(function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
        currentIndex = (currentIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
      }, 1000);
    },
  },
  mounted() {
    this.draw();
    this.draw2();
    this.draw3();
  },
};
</script>

<style>
#age {
  width: 100%;
  height: 30%;
}
#badtime {
  width: 100%;
  height: 30%;
}
#people {
  width: 100%;
  height: 30%;
}
</style>