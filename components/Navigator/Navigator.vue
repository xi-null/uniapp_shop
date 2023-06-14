<template>
	<view class="navigator_wrap">
		<view class="navigator_bar">
			<view class="back_wrap">
				<img src="../../static/img/back.svg" alt="" class="back_img" @click="goBack()">
			</view>
			<view class="title_content">
				{{title}}
			</view>
			<view class="add_wrap">
				<img src="../../static/img/add.svg" alt="" class="add_img">
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		name:"Navigator",
		props: {
		  title:{
			  type:String,
			  default:""
		  }
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.back_img {
		width: 25rpx;
		height: 40rpx;
	}
	.back_wrap {
		margin-left: 44rpx;
		padding-top: 33rpx;
	}
	.navigator_bar {
		padding-top: 77rpx;
		width: 750rpx;
		height: 110rpx;
		background-color: #ffe3cb;
		opacity: 0.76;
		display: flex;
	}
	.add_img {
		width: 40rpx;
		height: 38rpx;
		margin-top: 35rpx;
	}
	.add_wrap {
		margin-left: 44rpx;
	}
	.title_content {
		width: 369rpx;
		height: 56rpx;
		margin-left: 221rpx;
		padding-top: 27rpx;
		font-size: 42rpx;
		font-weight: normal;
		font-stretch: normal;
		line-height: 56rpx;
		letter-spacing: 0rpx;
		color: #ff9335;
	}
</style>