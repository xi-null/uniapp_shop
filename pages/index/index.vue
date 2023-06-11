<template>
	<view class="index_wra">
		<view class="first">
			<view class="left">
				<view class="role"></view>
				<view class="introduction"></view>
			</view>
			<view class="right">
				
			</view>
		</view>
		<view class="list">
			<view class="item">
				<view class="question">
					<view class="content"></view>
					<view class="time"></view>
				</view>
				<view class="answer"></view>
			</view>
		</view>
	</view>
	<Tabbar :selected="selected"></Tabbar>
</template>

<script>
	import {getHttp} from '../../request/index.js'
	
	export default {
		data() {
			return {
				title: 'Hello',
				selected:0, //导航栏选中
			}
		},
		onLoad() {
			uni.hideTabBar()
              console.log(getHttp())
		},
		methods: {

		}
	}
</script>

<style lang='scss'>
	.index_wra{
		height: 90vh;
		
	}

</style>
