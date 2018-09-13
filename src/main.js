//入口文件
 
// import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue.js'

// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)
// 导入自己的router.js模块
import router from './router.js'




// 导入vue-resource,利用api接口获取数据
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//  注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)


//每次刚进入网站，肯定会调用main.js 在刚调用的时候，先从本地存储中，把购物车的数据
//读取出来，放到store中
var car = JSON.parse(localStorage.getItem('car'))||[]

var store = new Vuex.Store({
    state:{  //this.$store.state.***
        car:car  //购物车商品的数据 用数组存储起来，在car数组中存储商品对象，
                //{id:商品的id,count:商品的数量,price:商品的单价,selected:是否被选中}
    },
    mutations:{ //this.$store.commit('方法名',唯一的参数 )
       addTocar(state,goodsinfo){
        //点击啊加入购物车，保存到state中去

        //默认是找不到的
        var flag = false;
        state.car.some( item => {
            if(item.id == goodsinfo.id){
                item.count += parseInt(goodsinfo.count)
                flag=true;
                return true
            }
        })  

        if(!flag){
            state.car.push(goodsinfo)
        }

        localStorage.setItem('car',JSON.stringify(state.car))

       },
       updateCount(state,info){
           //修改购物车中的商品数量值 
           state.car.some(item => {
            if(item.id==info.id){
                item.count=parseInt(info.count)
                return true
            }         
           })
           
           localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFromCar(state,id){
            state.car.some((item,i) => {
                if(item.id==id){
                    state.car.splice(i,1)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateStatus(state,info){
            state.car.some( item =>{
                if(item.id==info.id){
                    item.selected = info.selected
                    return true
                }
            })

            // 把最新的所有购物车商品状态保存到car中
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{  //this.$store.getters.***

        //每次从商品详情页面加入购物车时，使购物车页面列表自动更新
        getData(state){
           return state.car
        },

        getAllcount(state){
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            }) 
            return c;
        },

        getSelected(state){
            var arr={};
            state.car.forEach( item =>{
                arr[item.id] = item.selected
            })
            return arr
        },

        getGoodsCount(state){
            var o ={};
            state.car.forEach( item => {
                o[item.id] = item.count
            })
            return o
        },

        getCountAndAmount(state){
                var o = {
                    count:0,
                    amount:0
                }
                state.car.forEach( item =>{
                    if(item.selected){
                       o.count += item.count
                       o.amount += item.count*item.price
                    }
                })
                return o           
        }
        }

        

       

})


// mint-ui按需导入
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/index.js'
Vue.use(Mint)
// import { Swipe, SwipeItem ,Lazyload} from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(Lazyload);




// 导入mui样式表
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 导入全局css
import './css/global.css'


// 定义全局时间过滤器
import moment from 'moment'  //导入时间插件
Vue.filter('dateFormate',function (dateStr,pattern) { 
    return moment(dateStr).format(pattern)
 })



import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router, //挂载路由
    store //挂载store
})



