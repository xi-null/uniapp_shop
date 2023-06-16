<template>
	<view class="center_wrap">
		<view class="name">{{nickName}}</view>
		<view class="limit_box">
			<view class="limit_num_box">
				<view class="limit_num_content">剩余额度：10000000000</view>
				<button class="limit_num_button">充值</button>
			</view>
			<view class="nickName">
				昵称1：
			</view>
			<view class="nickName">
				昵称2：
			</view>
		</view>
		<view class="list">
			<view class="list_item" v-for="(item,index) in itemList" :key="item.index">
				<view class="list_item_icon">
					<img :src="item.imgUrl" alt="" class="icon_css">
				</view>
				<view class="listName">
					{{item.label}}
				</view>
				<view class="goIcon" @click="goPage(item.url)">
					<img src="../../static/img/go1.svg" alt="" class="goIcon_css">
				</view>
			</view>
		</view>
	</view>
	<Tabbar :selected="selected"></Tabbar>
</template>

<script>
	// import {login} from '../../request/index.js'
	export default {
		onLoad() {
			console.log(1)
			this.login()
			this.nickName = uni.getStorageSync('nickname')
		},
		data() {
			return {
				selected:2,
				nickName:'',
				itemList:[
					{label:'个人历史订单',url:'/pages/history_orders/history_orders',imgUrl:'../../static/img/historical.svg'},
					{label:'已绑定子女',url:'/pages/child_information/child_information',imgUrl:'../../static/img/sondaughter.svg'},
					{label:'邀请码填写',url:'/pages/Invitation_code/Invitation_code/Historical_orders',imgUrl:'../../static/img/invited.svg'},
					{label:'邀请好友激励',url:'/pages/Historical_orders/Historical_orders',imgUrl:'../../static/img/present.svg'},
					{label:'智能生成儿童心理健康报告',url:'/pages/report/report',imgUrl:'../../static/img/report.svg'},
					{label:'意见反馈',url:'/pages/feedback/feedback',imgUrl:'../../static/img/advice.svg'},
				]
			};
		},
		methods:{
			goPage(goUrl){
				uni.navigateTo({
				    url:goUrl
				})
			},
			login(){
				uni.login({
					"provider": "weixin",
					"onlyAuthorize": true, // 微信登录仅请求授权认证
					success: function(event){
						const {code} = event
						console.log(event.code)
						//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
						

						uni.request({
							header: {
								'Content-Type': 'application/x-www-form-urlencoded'
							},
							url: 'http://124.221.52.24:20235/api/user/login', 
							data: {
								code: event.code
							},
							method:'POST',
							success: (res) => {
								console.log(res)
								uni.setStorageSync('accessToken',res.data.item.accessToken)
								uni.setStorageSync('userId',res.data.item.userId)
								uni.setStorageSync('refreshToken',res.data.item.refreshToken)
								uni.setStorageSync('openid',res.data.item.openid)
								uni.setStorageSync('nickname',res.data.item.nickname)
							},
							fail() {
								console.log('请求失败')
							}
						});
					},
					fail: function (err) {
						console.log('登录失败')
						}
					})
			}
}	}
</script>

<style lang="less">
	.center_wrap{
		height: 90vh;
	}
	.name{
		padding-left: 90rpx;
		margin-top: 118rpx;
		padding-bottom: 17rpx;
		height: 60rpx;
		font-size: 46rpx;
		font-weight: bold ;
		line-height: 60rpx;
		letter-spacing: 0rpx;
		color: #000000;
	}
	.limit_box{
		width: 692rpx;
		height: 244rpx;
		margin-left: 29rpx;
		background-color: #ff9335;
		box-shadow: 0rpx 10rpx 15rpx 0rpx 
			rgba(0, 0, 0, 0.16);
		border-radius: 60rpx;
		color: #ffffff;
		.limit_num_box{
			margin-left: 62rpx;
			padding-top: 37rpx;
			display: flex;
			.limit_num_content{
				font-size:38rpx ;
			}
			.limit_num_button{
				width: 156rpx;
				height: 58rpx;
				line-height: 58rpx;
				background-color: #ffffff;
				border-radius: 25rpx;
				border: solid 2rpx #ffffff;
			}
		}
		.nickName{
			margin-left: 62rpx;
			margin-top: 13rpx;
		}
	}
	.list{
		height: 721rpx;
		margin-left: 29rpx;
		.list_item{
			display: flex;
			width: 692rpx;
			height: 96rpx;	
			margin-top: 29rpx;
			background-color: #ffffff;
			box-shadow: 0rpx 10rpx 15rpx 0rpx 
				rgba(0, 0, 0, 0.16);
			border-radius: 60rpx;
			.listName{
				width: 510rpx;
				height: 40rpx;
				font-size: 31rpx;
				color: #000000;
				padding-left: 29rpx;
				padding-top: 29rpx;
			}
			.icon_css{
				margin-top: 33rpx;
				margin-left: 56rpx;
				width: 29rpx;
				height: 35rpx;
			}
			.goIcon_css{
				width: 29rpx;
				height: 44rpx;
				margin-top: 25rpx;
			}
		}
	}
</style>
