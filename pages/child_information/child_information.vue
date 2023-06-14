<template>
	<view class="child_information_wrap">
		<Navigator :title="title"></Navigator>
		<view v-for="item in childList">
			<view class="title">
				<view class="title_content">
					已绑定子女
				</view>
				<button class="modify">修改</button>
			</view>	
			<view class="child_information_detail">
				<view class="child_information_list">
					<view class="nickName">
						昵称：
					</view>
					<view class="gender">
						性别：
					</view>
					<view class="age">
						年龄：
					</view>
					<view class="school">
						学校：
					</view>
					<view class="grade">
						年级：
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"子女资料",//顶部导航栏标题
				//子女信息列表数组
				childList:[
					1,2
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.title{
		display: flex;
		margin-top: 67rpx;
		margin-left: 102rpx;
	}
	.title_content{
		width: 212rpx;
		height: 56rpx;
		font-family: Microsoft YaHei;
		font-size: 42rpx;
		font-weight: normal;
		font-stretch: normal;
		line-height: 56rpx;
		letter-spacing: 0rpx;
		color: #000000;
	}
	.modify{
		width: 156rpx;
		height: 58rpx;
		color: #fff;
		line-height: 58rpx;
		background-color: #ff9335;
		border-radius: 25rpx;
		border: solid 2rpx #ff9335;
	}
	.child_information_detail{
		width: 683rpx;
		margin-left: 38rpx;
		height: 398rpx;
		background-color: #ffffff;
		box-shadow: 0rpx 15rpx 15rpx 0rpx 
			rgba(0, 0, 0, 0.16);
		border-radius: 60rpx;
	}
	.child_information_list{
		margin-left: 63rpx;
		padding-top: 46rpx;
	}
	.child_information_list > view {
		margin-top: 25rpx;
	}
</style>
