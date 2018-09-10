<template>
    <div class="goodsBox">
        <div class="goodsItem" v-for="item in goodsList" :key="item.img_src" @click="goDetails(item.id)">
            <img :src="item.img_url" alt="">
            <h3>{{item.title}}</h3>
            <div class="price">
                <span class="new">￥{{item.new_price}}</span>
                <span class="old">￥{{item.old_price}}</span>
            </div>
            <div class="stock">
                <span class="hot">{{item.mark}}</span>
                <span>剩余{{item.stock}}件</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            goodsList:[]
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            this.$http.get('../../main.json').then(res => {
                this.goodsList = res.body.goods;
            })
        },
        goDetails(id){
            this.$router.push('/home/googsDetails/'+id)
        }
    }
}
</script>

<style lang="less" scoped>
.goodsBox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:0 8px;
    .goodsItem{
        width: 49%;
        border: 1px solid #e9e9e9;
        background-color: #e4e4e4;
        margin-top: 10px;
        box-shadow: 0 0 4px #999;
        border-radius: 4px;
        img{
            width: 100%;
            display: block;
        }
        h3{
            margin: 0;
            padding: 6px 4px;
            font-size: 14px;
            color: #333;
            font-weight: normal;
            line-height: 18px;
            background-color: #fff;
        }
        .price{
            padding-top: 10px;
            span{
                padding-right: 4px;
                &.new{
                    color: red;
                    font-size: 24px;
                    font-weight: 500;
                    letter-spacing: -1px;
                }
                &.old{
                    font-size: 12px;
                    color: #bbb;
                    text-decoration: line-through;
                }
            }
        }
        .stock{
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #bbb;
            padding: 0 6px;
        }
    }
}
</style>
