<template>
    <div>
        <swiper :lunboList="lunboList"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/news">
                    <img src="../../images/news.png" alt="" srcset="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/share">
                    <img src="../../images/share.png" alt="" srcset="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <router-link to="/home/googs">
                    <img src="../../images/shopping.png" alt="" srcset="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/msg.png" alt="" srcset="">
		        <div class="mui-media-body">留言反馈</div></a>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/video.png" alt="" srcset="">
		        <div class="mui-media-body">视频专区</div></a>
            </li>
             <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/contacts.png" alt="" srcset="">
		        <div class="mui-media-body">联系我们</div></a>
            </li>		          
		</ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import swiper from '../subcomponents/swiper.vue';

export default{
    data(){
        return {
            lunboList:[]
        }
    },
    created(){
       this.getlunbo()
    },
    methods:{
        getlunbo(){
            this.$http.get('../main.json').then(res=>{
                // console.log(res.body);
                if(res.body.status===0){
                    this.lunboList=res.body.message
                    // Toast('获取轮播数据ok');
                }else{
                    Toast('获取轮播数据失败');
                }
            })
        }
    },
    components:{
        swiper
    }
} 
</script>

<style lang="less" scoped>

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border-top: 0;
    .mui-table-view-cell img{
        width:60px;
        height:60px;
    }
}

</style>