import VueRouter from 'vue-router'

// 导入组件
import HomeCotainer from './components/tabbar/HomeCotainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

import PhotoList from './components/photos/PhotoList.vue'
import PhotoCon from './components/photos/PhotoCon.vue'

import GoodsList from './components/Goods/GoodsList.vue'
import GoodsDetails from './components/Goods/GoodsDetails.vue'
import GoodsIntro from './components/Goods/GoodsIntro.vue'
import GoodsComments from './components/Goods/GoodsComments.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeCotainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:SearchContainer},
        {path:'/search',component:ShopcarContainer},
        {path:'/home/news',component:NewsList},
        {path:'/home/newsInfo/:id',component:NewsInfo},
        {path:'/home/share',component:PhotoList},
        {path:'/home/photoCon/:id',component:PhotoCon},
        {path:'/home/googs',component:GoodsList},
        {path:'/home/googsDetails/:id', component:GoodsDetails},
        {path:'/home/GoodsIntro/:id',component:GoodsIntro,name:'GoodsIntro'},
        {path:'/home/GoodsComments/:id',component:GoodsComments,name:'GoodsComments'}
    ],
    linkActiveClass:'mui-active'
})

export default router


