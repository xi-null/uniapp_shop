<template>
	<Navigator title="邀请码填写" backUrl="/pages/center/center"></Navigator>
	<view class="invite_wra">
		<view class="code">
			<input type="text" v-model="code">
		</view>
		<button @click="submit">确认</button>
		
		
	</view>
</template>

<script>
	import {inviteCodeAPI} from '../../request/index.js'
	export default {
		data() {
			return {
				code:'',//邀请码
				time:''
			}
		},
		onLoad(){
	
			this.time = uni.$u.timeFormat(new Date().getTime(),`yyyy-mm-dd hh:MM:ss`) +' GMT+08:00'
			console.log(this.time)
			
			
		},
		methods: {
			async submit(){
				let obj = {
					userId:uni.getStorageSync('userId'),
					inviteCode:this.code,
					inviteTime:this.time
				}
				let res = await inviteCodeAPI(obj)
				if(res.success){
					uni.$u.toast('填写成功')
					uni.navigateBack()
				}
			}
			
		}
	}
</script>

<style lang="scss">
	.invite_wra{
		height: 88vh;
		background-color: #f4f4f4;
		overflow: hidden;
		.code{
			margin: auto;
			margin-top: 58rpx;
			width: 583rpx;
			input{
				text-indent: 20px;
				width: 583rpx;
					height: 106rpx;
					background-color: #ffffff;
					box-shadow: 0rpx 0rpx 21rpx 0rpx 
						rgba(0, 0, 0, 0.16);
					border-radius: 46rpx;
					padding-left: 20px;
					
			}
		}
		button{
			
			margin: auto;
			margin-top: 85rpx;
			display: flex;
			justify-content: center;
					align-items: center;
					width: 221rpx;
						height: 87rpx;
						background-color: #ff9335;
						color: white;
						border-radius: 25rpx;
						border: solid 2rpx #ff9335;}
		
		}
		
	

</style>
