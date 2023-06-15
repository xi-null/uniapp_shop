<template>
	<view class="list">
		<u-list
		@scrolltolower="scrolltolower"
				>
		<u-list-item class="item" v-for="(item,key) in list">
			<view class="question">
				<view class="content">{{item.questionText}}</view>
				<view class="time">{{item.askTime}}</view>
			</view>
			<view class="answer">
				<view class="content">	{{item.answerText}}</view>
			</view>
		</u-list-item>
		</u-list>
	</view>
</template>

<script>
	export default {
		props:['list'],
		name:"List",
		data() {
			return {
				
			};
		},
		mounted(){
			console.log(this.list)
		},
		methods:{
			scrolltolower(){
				console.log('加载')
				//通知父组件更新数据，展示组件仅负责展示
			}
		}
		
	}
</script>

<style lang="scss">
	.list{
		width: 100%;
		margin: auto;
		height: 100%;
		overflow: scroll;
		.item{
			width: 100%;
			margin-top: 58rpx;
			.question{
				width: 100%;
					background-color: #ffffff;
					box-shadow: 0rpx 0rpx 15rpx 0rpx 
						rgba(0, 0, 0, 0.16);
					border-radius: 60rpx;
					margin-bottom: 12rpx;
					
					.content{
							font-family: Microsoft YaHei;
							font-size: 31rpx;
							font-weight: normal;
							font-stretch: normal;
							line-height: 40rpx;
							letter-spacing: 0rpx;
							padding: 20px;
							color: #000000;
					}
					.time{
						font-family: Microsoft YaHei;
							font-size: 19rpx;
							font-weight: normal;
							font-stretch: normal;
							line-height: 27rpx;
							letter-spacing: 0rpx;
							color: #000000;
							display: flex;
							justify-content:flex-end;
							padding: 10px;
							margin-right: 27rpx;
					}
			}
			.answer{
				width: 100%;
				min-height: 304rpx;
				background-color: #ff9335;
					box-shadow: 0rpx 12rpx 15rpx 0rpx 
						rgba(0, 0, 0, 0.16);
						border-radius: 60rpx;
						.content{
							padding: 20px;
							color: #ffffff;
						}
			}
			
		}
	}

</style>