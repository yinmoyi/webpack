<template>
    <div>
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
				<router-link :to="'/home/newsInfo/' + item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img">
					<div class="mui-media-body">
						<h6>{{item.title}}</h6>
						<p class="mui-ellipsis">
                            <span>发表时间：{{item.addTime | dateFormate('YYYY-MM-DD')}}</span>
                            <span>点击次数：{{item.click}}次</span>
                        </p>
					</div>
				</router-link>
			</li>
		</ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';

    export default {
        data(){
            return {
                newsList:[]
            }
        },
        created(){
            this.getNewsList()
        },
        methods:{
            getNewsList(){
                this.$http.get("../../main.json").then(res => {
                    if(res.body.status===0){
                        this.newsList=res.body.news
                    }else{
                        Toast('获取数据失败');
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    ul{
        li{
            h6{
                font-size: 14px;
                color: #333;
            }
            .mui-ellipsis{
                font-size: 12px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>