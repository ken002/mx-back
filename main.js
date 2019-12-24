import Vue from 'vue'
import App from './App'
import util from './common/util.js'
Vue.config.productionTip = false
Vue.prototype.$util=util
App.mpType = 'app'

//canvas压缩图片
import cpimg from './components/common/cpimg/cpimg';
Vue.component('cpimg',cpimg);

const app = new Vue({
    ...App
})
app.$mount()
