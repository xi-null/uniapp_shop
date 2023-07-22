<template>
	<view class="center_wrap">
		<view class="name" @click="show=true">{{nickname}}</view>
		<view class="limit_box">
			<view class="limit_num_box">
				<view class="limit_num_content">剩余额度：{{balance}}</view>
				<button class="limit_num_button"  @click="goPage('/pages/pay/pay')">充值</button>
			</view>
		
		</view>
		<view class="list">
			<view class="list_item" v-for="(item,index) in itemList" :key="item.index"  @click="goPage(item.url)">
				<view class="list_item_icon">
					<img :src="item.imgUrl" alt="" class="icon_css">
				</view>
				<view class="listName">
					{{item.label}}
				</view>
				<view class="goIcon">
					<img src="../../static/img/go1.svg" alt="" class="goIcon_css">
				</view>
			</view>
		</view>
			<u-popup :show="show" mode="bottom" class="popup">
		            <view>
						<view class="label">昵称:</view>
		               <input type="nickname" placeholder="输入昵称" class="name_input" v-model="nickname">
		            </view>
					 <button @click="updateName">确定</button>
				</u-popup>
	</view>
	<Tabbar :selected="selected"></Tabbar>
</template>

<script>
	import {getUserAPI,updareUserAPI} from '../../request/index.js'
	export default {
		onLoad() {
			this.nickName = uni.getStorageSync('nickname')
		},
		data() {
			return {
				selected:2,
				nickname:'',
				balance:0,//额度
				itemList:[
					{label:'个人历史订单',url:'/pages/history_orders/history_orders',imgUrl:'../../static/img/historical.svg'},
					{label:'已绑定子女',url:'/pages/child_information/child_information',imgUrl:'../../static/img/sondaughter.svg'},
					{label:'邀请码填写',url:'/pages/Invitation_code/Invitation_code',imgUrl:'../../static/img/invited.svg'},
					{label:'邀请好友激励',url:'/pages/Historical_orders/Historical_orders',imgUrl:'../../static/img/present.svg'},
					{label:'智能生成儿童心理健康报告',url:'/pages/report/report',imgUrl:'../../static/img/report.svg'},
					{label:'意见反馈',url:'/pages/feedback/feedback',imgUrl:'../../static/img/advice.svg'},
				],
				show:false,//昵称修改
			};
		},
		onLoad(){
			this.getInfo()
		},
		methods:{
			goPage(goUrl){
				uni.navigateTo({
				    url:goUrl
				})
			},
			async getInfo(){
				let userId = uni.getStorageSync('userId')
				let res = await getUserAPI(userId)
				this.nickname = res.item.nickname
				this.balance = res.item.balance
				
				
			},
			async updateName(){
				let obj = {
					userId:uni.getStorageSync('userId'),
					nickname:this.nickname
				}
				let res = await updareUserAPI(obj)
				if(res.success){
					this.show = false
					this.getInfo()
				}
				
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
	.popup{
	view{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40rpx;
		.label{
				font-family: Microsoft YaHei;
				font-size: 40rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 46rpx;
				letter-spacing: 0rpx;
		}
			.name_input{
				width: 400rpx;
					height: 106rpx;
				
					margin-left: 50rpx;
				
					text-indent: 3em;
					
			}
	}
	
		button{
			width: 221rpx;
				height: 87rpx;
				background-color: #ff9335;
				border-radius: 25rpx;
				border: solid 2rpx #ff9335;
				display: flex;
				margin-top: 20px;
						align-items: center;
						justify-content:center}
	}
	
	
</style>
