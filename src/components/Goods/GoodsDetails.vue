<template>
    <div class="goodsInfo">
        <!-- 商品轮播 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :lunboList="goodsLunbo"></swiper>
				</div>
			</div>
		</div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
			<div class="mui-card-header">商品的标题</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
                        <span>市场价：<del>￥2399</del></span>
                        <span class="new_price">销售价：￥2199</span>
                    </p>
                    <p class="number">
                        购买数量： <numbox></numbox>  
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
				</div>
			</div>
		</div>

        <!-- 商品详情区域 -->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：123456789</p>
                    <p>库存情况：60件</p>
                    <p>上架时间：2018-07-01 16:00:30</p>
				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goGoodsIntro(id)">商品详情</mt-button>
                <mt-button type="danger" size="large" plain @click="goGoodsComments(id)">商品评论</mt-button>
            </div>
		</div>
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/GoodsDetails_numbox.vue';

export default {
    data(){
        return {
            id:this.$route.params.id,
            goodsLunbo:[]
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
                    this.goodsLunbo=res.body.message
                    // Toast('获取轮播数据ok');
                }else{
                    Toast('获取轮播数据失败');
                }
            })
        },
        goGoodsIntro(id){
            // console.log(id)
            // 利用导航式路由跳转至商品详情页
            this.$router.push({name:'GoodsIntro',params:{ id }})
        },
        goGoodsComments(id){
            // 利用导航式路由跳转至商品评论
            this.$router.push({name:'GoodsComments',params:{ id }})
        }
    },
    components:{
        swiper,
        numbox
    }
}
</script>

<style lang="less" scoped>
.goodsInfo{
    background-color: #eee;
    overflow: hidden;
}
.price{
    color: #666;
    span{
        padding-right: 6px;
        letter-spacing: -1px;
        &.new_price{
            color: red;
            font-size: 16px;
        }
    }
}
.number{
    color: #666;
}
.mui-numbox{
    height: 25px;
}
.mui-card-footer{
    display: block;
    button{
        margin-bottom: 10px;
    }
}
</style>
