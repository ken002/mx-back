import Vue from 'vue'
import App from './App'
import util from './common/util.js'
Vue.config.productionTip = false
Vue.prototype.$util=util
App.mpType = 'app'

import imageCache from './components/common/image-cache/image-cache';
Vue.component('image-cache',imageCache);

import videoCache from './components/current/video-cache/video-cache';
Vue.component('video-cache',videoCache);

//canvas压缩图片
import cpimg from './components/common/cpimg/cpimg';
Vue.component('cpimg',cpimg);

const app = new Vue({
    ...App
})
app.$mount()
