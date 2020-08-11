<template>
  <div class="navigation" style="overflow:hidden;z-index:99;position: fixed;width:100%">
    <el-container style="height: 100%; border: 1px solid #eee ;">
      <div id="top_img"></div>
      <el-aside width="15%">
        <div class="left_div" @click="changecolor(0)" style="backgroundColor='#b3c0d1'">动态情况</div>
        <div class="left_div" @click="changecolor(1)">基础信息</div>
        <div class="left_div" @click="changecolor(2)">统计信息</div>
      </el-aside>
      <div id="bottom_msg">
        <div>位置</div>
        <div>负责人信息</div>
      </div>

      <el-container>
        <el-header style="text-align: right; font-size: 12px;height:6%">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main style="padding:0;">
          <slide id="carousel" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "navigation",
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      tableData: [
        { date: "2016-05-02", name: "王小虎", address: "????" },
        { date: "2016-05-02", name: "王小", address: "????" },
        { date: "2016-05-02", name: "王", address: "????" },
        { date: "2016-05-02", name: "王da虎", address: "????" },
      ],
      //变化横坐标的timer
      jilu: 0,
      timer: "",
    };
  },
  methods: {
    changecolor: function (temp) {
      clearInterval(this.timer);
      let alltitle = document.querySelectorAll(".left_div");
      for (let i = 0; i < alltitle.length; i++) {
        alltitle[i].style.backgroundColor = "#eef1f6";
      }
      alltitle[temp].style.backgroundColor = "#b3c0d1";
      let temp_div = document.querySelector(".temp_div");

      //渐变动画
      let one = [(temp - this.jilu) * 2, (temp - this.jilu) * 4];
      let con = 0;
      let get_jilu = this.jilu * 100;
      console.log(this.jilu,temp);
      let that = this;
      this.timer = setInterval(function () {
        temp_div.style.left = -(get_jilu + one[0]) + "%";
        get_jilu += one[0];
        con++;
        if (con == 50) {
          clearInterval(that.timer);
        }
      }, 10);
      this.jilu = temp;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
  background-color: rgb(238, 241, 246);
  position: relative;
  top: 6%;
  height: 50%;
}
.hello {
  height: 100%;
}
#bottom_msg {
  height: 44%;
  width: 15%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 2px solid slategray;
  border-right: 2px solid slategray;
}
#bottom_msg > div {
  height: 49.5%;
  width: 100%;
  border-bottom: 2px solid slategray;
}
#top_img {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rebeccapurple;
  width: 15%;
  height: 6%;
}
.left_div {
  height: 10%;
  width: 99%;
  font-size: 18px;
  text-align: center;
  padding-top: 8%;
  border-bottom: 1px solid red;
}
#carousel {
  position: absolute;
  left: 15%;
  overflow-x: hidden;
  height: 93.9%;
  width: 85%;
}
</style>
