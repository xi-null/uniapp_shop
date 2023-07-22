<template>
       <Navigator backUrl="/pages/child_information/child_information" title="子女资料"></Navigator>
	<view class="addChild_wra">
		<view class="title">
			更新子女信息
		</view>
		<view class="form">
			<view class="item">
					<view class="label">姓名:</view>
					<input type="text" v-model="userInfo.nickname">
			</view>
			<view class="item">
					<view class="label">年龄:</view>
					<input type="text" v-model="userInfo.age">
			</view>
			<view class="item">
					<view class="label">性别:</view>
					<input type="text" v-model="userInfo.gender">
			</view>
		<view class="item">
				<view class="label">学校:</view>
				<input type="text" v-model="userInfo.school">
		</view>
		<view class="item">
				<view class="label">年级:</view>
				<input type="text" v-model="userInfo.grade">
		</view>
		
			
			</view>
		 <button @click="submit">确定</button>
		
	</view>
</template>

<script>
	import {updateChildAPI,getDetailAPI} from '../../request/index.js'
	export default {
		data() {
			return {
				userInfo:{
					nickname:'',
					school:'',
					grade:'',
					age:'',
					gender:''
				}, //子女资料
				childId:'',
			};
		},
		 onLoad(option){
			let childId = option.childId
			this.childId = childId
			this.getData(childId)
			
		},
		methods:{
			async submit(){
				let parentId = uni.getStorageSync('userId')
				let obj = {...this.userInfo,parentId,childId:this.childId}
				let res = await updateChildAPI(obj)
				if(res.success){
						uni.$u.toast('修改成功')
						this.getData(this.childId)
						
				}
				},
				async getData(childId){
					let parentId = uni.getStorageSync('userId')
					//获取信息
					let res = await getDetailAPI(childId,parentId)
					this.userInfo = res.item
				},
				
				
		
	
	},
	}
</script>

<style lang="scss">
	.addChild_wra{
		height: 88vh;
		background-color: #f4f4f4f4;
		overflow: hidden;
		.title{
			margin: 85rpx 0 79rpx 102rpx;
				font-family: Microsoft YaHei;
				font-size: 42rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 56rpx;
				letter-spacing: 0rpx;
				color: #000000;
		}
		.form{
			margin-left: 104rpx;
			.item{
				display: flex;
				align-items: center;
				margin-top: 46rpx;
				.label{
					font-family: Microsoft YaHei;
						font-size: 35rpx;
						font-weight: normal;
						font-stretch: normal;
						line-height: 46rpx;
						letter-spacing: 0rpx;
						color: #000000;
						margin-right: 20rpx;
						
				}
				input{
					width: 429rpx;
						height: 62rpx;
						background-color: #ffffff;
						border-radius: 60rpx;
						font-family: Microsoft YaHei;
							font-size: 35rpx;
							font-weight: normal;
							font-stretch: normal;
							line-height: 46rpx;
							letter-spacing: 0rpx;
							color: #000000;
							padding-left: 10px;
				}
			}
			
		}
		button{
				width: 221rpx;
				height: 87rpx;
				background-color: #ff9335;
				border-radius: 25rpx;
				border: solid 2rpx #ff9335;
				margin-top: 506rpx;
				display: flex;
				justify-content: center;
				align-items: center;
		}
	}
	

</style>
