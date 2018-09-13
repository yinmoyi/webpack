<template>
    <div class="shopcar">

        <!-- 购物车列表 -->
         <div class="mui-card">
			<!-- <div class="mui-card-header">商品的标题</div> -->
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="carList" v-for="(item,i) in carList" :key="item.id">
                        <mt-switch v-model="$store.getters.getSelected[item.id]"
                            @change="selectedStatus(item.id,$store.getters.getSelected[item.id])"></mt-switch>
                        <img src="https://img.alicdn.com/tfscom/i3/2452452361/TB1DDaYaMjN8KJjSZFgXXbjbVXa_!!0-item_pic.jpg" alt="">
                        <div class="info">
                            <h1>{{item.id+'商品标题'}}</h1>
                            <span>{{item.price}}</span><numbox :initCount="$store.getters.getGoodsCount[item.id]"
                            :id="item.id"></numbox>
                            <a href="javascript:;" @click.prevent="del(item.id,i)">删除</a>
                        </div>
                    </div>
				</div>
			</div>
		</div>

        <!-- 结算 -->
         <div class="mui-card">
			<!-- <div class="mui-card-header">商品的标题</div> -->
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="jiesuan">
                        <div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品<span class="red">{{$store.getters.getCountAndAmount.count}}</span>件，
                                总价:<span class="red">￥{{$store.getters.getCountAndAmount.amount}}</span></p>
                        </div>
                        <div class="right">
                            <mt-button type="danger">去结算</mt-button>
                        </div>
                    </div>
				</div>
			</div>
		</div>
        
       
    </div>
</template>
<script>

import numbox from '../subcomponents/ShopCar_numbox.vue'

// var carList = JSON.parse(localStorage.getItem('car'))
export default {
    data(){
        return{
            carList: this.$store.getters.getData
        }
    },
    methods:{
        del(id,index){
           this.carList.splice(index,1)
        //    console.log(this.carList)
            this.$store.commit('removeFromCar',id)
        },
        selectedStatus(id,status){
            // console.log(id+'---'+status)
            this.$store.commit('updateStatus',{id,selected:status})
        }
        
    },
    components:{
       numbox 
    }
}
</script>

<style lang="less" scoped>
.shopcar{
    background-color: #f5f5f5;
    overflow: hidden;
    .carList{
        display: flex;
        align-items: center;
        margin-top: 10px;
        img{
            width: 60px;
            height: 60px;
            margin: 0 4px;
        }
        h1{
            font-size: 13px;
        }
    }
    .noRecord{
        width: 100%;
        height: 100px;
        text-align: center;
        font-size: 12px;
        color: #666;
        line-height: 100px
    }
}
.jiesuan{
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        margin: 0
    }
    .red{
        color: #f00;
        font-weight: 500;
        font-size: 18px;
        padding: 0 4px;
    }
}
</style>