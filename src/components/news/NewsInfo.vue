<template>
    <div>
        <h1>我是新闻内容区域==={{id}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id
        }
    }
}
</script>

<style>

</style>

