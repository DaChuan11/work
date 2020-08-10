<template>
  <div class="imgback">
    <div class="wrap">
      <div class="wrapper wrapper1">
        <div class="arc">
          <div class="arc">
            <div class="arc">
              <div class="arc">
                <div class="arc">
                  <div class="arc">
                    <div class="arc">
                      <div class="arc">
                        <div class="arc">
                          <div class="arc">
                            <div class="arc">
                              <div class="arc">
                                <div class="arc">
                                  <div class="arc">
                                    <div class="arc">
                                      <div class="arc" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper wrapper2">
        <div class="arc">
          <div class="arc">
            <div class="arc">
              <div class="arc">
                <div class="arc">
                  <div class="arc">
                    <div class="arc">
                      <div class="arc">
                        <div class="arc">
                          <div class="arc">
                            <div class="arc">
                              <div class="arc">
                                <div class="arc">
                                  <div class="arc">
                                    <div class="arc">
                                      <div class="arc" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mid",
};
</script>

<style>
.imgback {
  width: 100%;
  height: 100%;
  background-image: url("../assets/rotate.gif");
  /* background-size: cover; */
}

/* 雷达动画 */
.wrapper {
  position: absolute;
  display: block;
  margin: calc(50vh - 250px) calc(50vw - 250px);
  transition: 2s ease;
  cursor: pointer;
}
.wrapper1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
}
.wrapper2 {
  width: 200px;
  height: 200px;
  top: 15%;
  left: 24%;
}
.wrapper:hover {
  transform: scale(1.2);
}

.arc:before,
.arc:after {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid #000;
  top: -4px;
  left: -4px;
  border-color: hsl(160, 70%, 50%) transparent transparent transparent;
  border-radius: 50%;

  z-index: -8;
  content: "";
}

.arc:after {
  border-color: transparent transparent hsl(345, 70%, 50%) transparent;
}

.arc {
  position: absolute;
  display: block;
  width: 85%;
  height: 85%;
  margin: 7.5%;
  border-radius: 50%;
  animation: 15s rotate linear infinite;
  /* box-shadow: 0px 0px 0px 2px #fff2; */
  /* 边框线 */
}

@keyframes rotate {
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(810deg);
  }
}
</style>