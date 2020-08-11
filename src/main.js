import Vue from 'vue';
import $ from 'jquery';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from 'axios';
import  'echarts-gl';
import echarts from 'echarts';
// Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
new Vue({
  render: h => h(App),
}).$mount('#app');
Vue.prototype.$ = $;
Vue.prototype.$axios = axios;

