<template>
    <div>
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll">
				<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id">{{item.title}}</a>
			</div>
		</div>
        <ul class="photoList">
            <router-link tag="li" :to="'/home/photoCon/'+ item.id" v-for="item in list" :key="item.id">
                <img v-lazy="item.src">
                <p>{{item.zhaiyao}}</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{
            cates:[],
            list:[]
        }
    },
    created(){
        this.getCategory(),
        this.getImgByCategoryId()
    },
	mounted(){
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			
		});
	},
    methods:{
        getCategory(){
            this.$http.get('../../main.json').then(res => {
               res.body.category.unshift({ title : "全部",id:0})
               this.cates = res.body.category
            })
        },
        getImgByCategoryId(){
            this.$http.get('../../main.json').then(res => {
                this.list = res.body.photos
            })
        }
    }
}
</script>

<style lang="less" scoped>
*{
    touch-action: pan-y
}

ul{
    list-style: none;
    padding:0 10px;
    li{
        background: #e4e4e4;
        margin: 0;
        margin-bottom: 20px;
        text-align: center;
        position: relative;
        border: 1px solid #e9e9e9;
        box-sizing: border-box;
        box-shadow: 0 0 6px #ccc;
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        img{
            width: 100%;
            display: block;
        }
        p{
            margin: 0;
            position: absolute;
            bottom: 0;
            text-align: left;
            line-height: 24px;
            background: rgba(0, 0, 0, .4);
            padding: 0 10px;
            color: #fff;
        }
    }
}
</style>
