<template>
	<view class="child_information_wrap">
		<Navigator :title="title" :backUrl="backUrl"></Navigator>
		<view class="list_wra">
			<view v-for="item in childList" >
				<view class="title">
					<view class="title_content">
						已绑定子女
					</view>
					<button class="modify" @click="toUpdate(item.childId)">修改</button>
				</view>	
				<view class="child_information_detail">
					<view class="child_information_list">
						<view class="nickName">
							昵称：{{item.nickname}}
						</view>
						<view class="gender">
							性别：{{item.gender}}
						</view>
						<view class="age">
							年龄：{{item.age}}
						</view>
						<view class="school">
							学校：{{item.school}}
						</view>
						<view class="grade">
							年级：{{item.grade}}
						</view>
					</view>
				</view>
			</view>
		</view>
	
		<view class="add_wrap" @click="toAdd">
			<img src="../../static/img/add.svg" alt="" class="add_img">
			<view class="add_content" >
				添加
			</view>
		</view>
		
	</view>
</template>

<script>
	import {getChildAPI} from '../../request/index.js'
	export default {
		data() {
			return {
				title:"子女资料",//顶部导航栏标题
				//子女信息列表数组
				childList:[
					1,2,3,4,5
				],
				backUrl:'/pages/center/center',
			
			}
		},
		onLoad(){
			this.getList()
			console.log(this.childList)
		},
		methods: {
			toAdd(){
				uni.navigateTo({
					url:'/pages/addChild/addChild'
				})
				
			},
			//修改
			toUpdate(childId){
			uni.navigateTo({
				url:`/pages/updateChild/updateChild?childId=${childId}`,
				
			})
				
				
			},
			async getList(){
				let res = await getChildAPI(uni.getStorageSync('userId'))
				if(res.success){
					this.childList = res.item.children
				}
				
				
			}
			
		}
	}
</script>

<style lang="scss">
	.child_information_wrap {
		background-color: #f8f8f8;
		height: 100vh;
		.list_wra{
			height: 68vh;
			overflow: scroll;
			padding-bottom: 20px;
		}
	}
	.title{
		display: flex;
		margin-top: 67rpx;
		margin-left: 102rpx;
		margin-bottom: 25rpx;
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
	.add_wrap {
		width: 88rpx;
		height: 88rpx;
		margin-top: 100rpx;
		margin-left: 331rpx;
		border-radius: 50%;
		background-color: #ffffff;	
	}
	.add_img {
		width: 40rpx;
		height: 40rpx;
		margin-left: 23rpx;
		margin-top: 23rpx;
	}
	.add_content {
		width: 38rpx;
		height: 27rpx;
		margin-left: 24rpx;
		padding-top: 24rpx;
		font-size: 19rpx;
		line-height: 27rpx;
		letter-spacing: 0rpx;
		color: #707070;
	}
</style>
