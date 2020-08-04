import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import slide from './components/slide.vue';
import popup from './components/popup.vue';
import echarts from 'echarts';

Vue.use(ElementUI);
Vue.component('slide', slide);
Vue.component('popup', popup);

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
new Vue({
  render: h => h(App),
}).$mount('#app')

