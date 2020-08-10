<template>
  <div style="height:100%">
    <div class="top1">
      <div class="top11" style="float:left">logo 芯跳可视化</div>
      <div class="top12" style="float:right">
        <div style="float:left">{{ date[0] }}</div>
        <div style="float:right;fontSize:25px;marginLeft:4%">{{ date[1] }}</div>
        <div style="float:right;fontSize:25px;position:absolute;top:36%;left:76%">{{ date[2] }}</div>
      </div>
    </div>
    <div class="left left1">
      <intime :postdate="postdate" />
    </div>
    <div class="left left2">
      <mid />
    </div>
    <div class="left left3">
      <leftt style="width:100%;height:100%" />
    </div>
    <!-- <div class="left left3"></div> -->
  </div>
</template>

<script>
import mid from "./mid";
import leftt from "./leftt";
import intime from "./intime";
export default {
  name: "MasterControl",
  components: { mid, leftt, intime },
  data() {
    return {
      date: ["", "", ""],
      postdate: {miao:'',fen:'',shi:'',ri:''},
    };
  },
  methods: {
    //更新时间
    gettime() {
      let that = this;
      setInterval(function () {
        let date = new Date();

        //处理时间
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        let seconds = date.getSeconds();
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let timer = hours + ":" + minutes + ":" + seconds;
        let mon = date.getDay();
        if (mon == "0") {
          mon = "Mon.";
        } else if (mon == "1") {
          mon = "Tues.";
        } else if (mon == "2") {
          mon = "Wed. ";
        } else if (mon == "3") {
          mon = "Thurs. ";
        } else if (mon == "4") {
          mon = "Fri. ";
        } else if (mon == "5") {
          mon = "Sat. ";
        } else if (mon == "6") {
          mon = "Sun. ";
        }
        let daychar = year + "." + month + "." + day;
        that.date[1] = timer;
        that.date[2] = mon;
        that.date[3] = daychar;
        that.date.push("");
        that.date.shift();
        that.postdate.ri = day;
        that.postdate.shi = hours;
        that.postdate.fen = minutes;
        that.postdate.miao = seconds;
      }, 1000);
    },
  },
  mounted() {
    //触发绘图时间
    // this.drawChart();
    // this.changedata();
    this.gettime();
  },
};
</script>

<style>
.top11 {
  font-size: 60px;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  height: 100%;
  /* line-height: 100%; */
  margin-left: 2%;
}
.top12 {
  width: 16%;
  font-size: 50px;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  height: 100%;
  /* line-height: 100%; */
  margin-right: 2%;
  position: relative;
  padding-top: 1%;
}
.top1 {
  height: 10%;
}
.left11 {
  height: 50%;
}
.left {
  float: left;
  height: 90%;
}
.left1 {
  width: 25%;
  /* background-color: salmon; */
}
.left2 {
  width: 50%;
  /* background-color: bisque; */
}
.left3 {
  width: 25%;
  /* background-color: cadetblue; */
}
</style>