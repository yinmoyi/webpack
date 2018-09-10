<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList" :key="item.id">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:['lunboList']
}
</script>

<style lang="less" scoped>
.mint-swipe{
    height: 200px;
    img{
        // width: 100%;
        height: 200px;
    }
}

</style>
