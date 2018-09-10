<template>
    <div>
        <h1>我是图片详情==={{$route.params.id}}</h1>
        <!-- <img class="preview-img" v-for="(item, index) in list" 
        :src="item.src" height="100" :key="item.src" @click="$preview.open(index, list)"> -->

        <div class="thumbs">
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.getThumbs()
    },
    methods:{
        getThumbs(){
            this.$http.get('../../main.json').then(res => {
                // console.log(res)
                res.body.photos.forEach(item => {
                    item.w=600,
                    item.h=400            
                });

                this.list=res.body.photos
            })
        },
        handleClose () {
            console.log('close event')
        }

    }
}


</script>

<style lang="less" scoped>

</style>
