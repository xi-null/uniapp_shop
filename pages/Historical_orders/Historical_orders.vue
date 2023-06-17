<template>
	<Navigator title="邀请好友" backUrl="/pages/center/center"></Navigator>
	<view class="inviteWra">
		<view class="first">
			<view class="title">邀请好友奖励</view>
			<view class="introduction">激励规则</view>
		</view>
		<view class="main">
			<view class="codeTitle">
				个人邀请码:
			</view>
			<view class="code">
				<view class="codeText">{{invideInfo.inviteCode}}</view>
				<view class="copy" @click="copy">一键复制</view>
			</view>
			<view class="number">
				<view class="title">总人数：{{invideInfo.inviteNum}}</view>
				<view>0</view>
			</view>
			<view class="price">
				<view class="title">总收益：{{invideInfo.inviteTotalProfit}}</view>
				<view>0</view>
			</view>
			<view class="waitTitle">未提现总额:</view>
			<view class="wait">
				<view class="priceText">{{invideInfo.inviteBalance}}</view>
				<view class="on" @click="income">微信提现</view>
			</view>
		</view>


	</view>
</template>

<script>
	import {
		codeAPI
	} from '../../request/index.js'
	export default {
		data() {
			return {
				userId: uni.getStorageSync('userId'),
				invideInfo: {
					inviteCode: 0,
					inviteNum: 0,
					inviteTotalProfit: 0,
					inviteBalance: 0
				},
			};
		},
		onLoad() {
			console.log(this.invideInfo.inviteCode)
			this.getCode()
		},
		methods: {
			//获取信息
			async getCode() {
				let result = await codeAPI(this.userId)
				this.invideInfo = result.item
				console.log(this.invideInfo, result)
			},
			//复制
			copy() {

				uni.setClipboardData({
					data: this.invideInfo.inviteCode,
					success: function() {
						uni.showToast({
							title: '复制成功',
						});
					},
					fail: function() {
						uni.showToast({
							title: '复制失败',
						});
					}
				});


			},
			//发起提现
			income(){
			
				uni.showModal({
					title: '输入提现金额(元)',
					placeholderText	: '不可多于未提现金额',
					editable:true,
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							//判断金额大小后发起请求
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
			}
		}
	}
</script>

<style lang="scss">
	.inviteWra {
		height: 88vh;
		background-color: #f4f4f4;
		overflow: hidden;

		.first {
			display: flex;
			margin: auto;
			margin-top: 73rpx;
			width: 600rpx;
			justify-content: space-between;
			align-items: center;

			.title {
				font-family: Microsoft YaHei;
				font-size: 37rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 48rpx;
				letter-spacing: 0rpx;
				color: #ff9335;
			}

			.introduction {
				font-family: Microsoft YaHei;
				font-size: 31rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 40rpx;
				letter-spacing: 0rpx;
				color: #707070;
			}
		}

		.main {
			margin: auto;
			margin-top: 27rpx;
			width: 683rpx;
			overflow: hidden;
			height: 425rpx;
			background-color: #ffffff;
			box-shadow: 0rpx 0rpx 15rpx 0rpx rgba(0, 0, 0, 0.16);
			border-radius: 60rpx;

			.codeTitle {
				font-family: Microsoft YaHei;
				font-size: 35rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 40rpx;
				letter-spacing: 0rpx;
				color: #000000;
				margin: 46rpx 0 0 63rpx;
			}

			.code {
				display: flex;
				width: 450rpx;
				margin-left: 183rpx;
				justify-content: space-between;

				.codeText {
					font-family: Microsoft YaHei;
					width: 250rpx;
					font-size: 35rpx;
					font-weight: normal;
					font-stretch: normal;
					line-height: 40rpx;
					letter-spacing: 0rpx;
					color: #000000;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.copy {

					height: 38rpx;
					background-color: #ff9335;
					border-radius: 25rpx;
					border: solid 2rpx #ff9335;
					color: white;
					padding: 2px 5px 2px 5px;
					line-height: 40rpx;

				}

			}

			.number {
				margin-left: 63rpx;
				display: flex;
				font-family: Microsoft YaHei;
				font-size: 31rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 40rpx;
				letter-spacing: 0rpx;
				color: #000000;

			}

			.price {
				margin-left: 63rpx;
				display: flex;
				font-size: 31rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 40rpx;
				letter-spacing: 0rpx;
				color: #000000;
				margin-top: 3px;
			}

			.waitTitle {
				margin: 3px 0 0 63rpx;
				font-family: Microsoft YaHei;
				font-size: 35rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 40rpx;
				letter-spacing: 0rpx;
				color: #000000;
			}

			.wait {
				margin: 3px 0 0 183rpx;
				display: flex;
				width: 450rpx;
				justify-content: space-between;
				align-items: center;

				.on {
					height: 38rpx;
					background-color: #ff9335;
					border-radius: 25rpx;
					border: solid 2rpx #ff9335;
					color: white;
					padding: 2px 5px 2px 5px;
					line-height: 40rpx;
				}
			}
		}
	}
</style>
