//入口文件
 
// import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue.js'



// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)
// 导入自己的router.js模块
import router from './router.js'



// 导入mui样式表
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 导入全局css
import './css/global.css'



// mint-ui按需导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import { Swipe, SwipeItem ,Lazyload} from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(Lazyload);
Vue.use(MintUI)

// 导入vue-resource,利用api接口获取数据
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// 定义全局时间过滤器
import moment from 'moment'  //导入时间插件
Vue.filter('dateFormate',function (dateStr,pattern) { 
    return moment(dateStr).format(pattern)
 })


import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})



