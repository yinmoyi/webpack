<template>
    <div class="app-container">
        <!-- 头部 -->
        <header class="mui-bar mui-bar-nav">
			<!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> -->
			<h1 class="mui-title">vue 项目</h1>
		</header>

        <!-- 内容区域 -->
		<transition>
			<router-view></router-view>
		</transition>
		
        

        <!-- 底部tab栏 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">{{$store.getters.getAllcount}}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
        </nav>
    </div>
</template>

<script>
</script>

<style>
.app-container {
  padding: 44px 0 50px 0;
  overflow-x: hidden;
}

.v-enter,
.v-leave-to{
	opacity: 0;
}
.v-enter{
	transform: translateX(100%)
}
.v-leave-to{
	transform: translateX(-100%);
	position:absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all linear .3s;
}

.mui-bar-tab .mui-tab-item-1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

