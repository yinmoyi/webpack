<template>
   <div class="mui-numbox" data-numbox-min="1" style="height:25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="numChanged" ref="numbox"
        readonly>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
    mounted(){
        mui('.mui-numbox').numbox()
    },
    methods:{
        numChanged(info){
            // console.log(this.$refs.numbox.value)
            this.$store.commit('updateCount',{id:this.id,count:this.$refs.numbox.value})
        }
    },
    props:['initCount','id']
}
</script>

<style lang="less" scoped>

</style>
