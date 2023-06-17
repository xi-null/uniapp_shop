<template>
	<Navigator title="充值" backUrl="/pages/center/center"></Navigator>
	<view class="pay_wra">
		<view class="title">充值套餐:</view>
		<view class="list">
			<view  v-for="(item,index) in list" :key="index" @click="choose(index)" :class="{item:true,select:index==select}">
				<view>{{item.price}}元</view>
				<view>{{item.number}}次</view>
			</view>
		</view>
		<view class="button">立即充值</view>
		<view class="introduction">
			<view class="title">充值说明</view>
			<view class="intro_item" v-for="(item,index) in inroductionList" :key="index" >
				{{index+1}}.{{item}}
				
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{number:20,price:900},
					{number:20,price:900},
					{number:20,price:900},
					{number:20,price:900},
					{number:20,price:900},
					{number:20,price:900}
				], //套餐列表
				inroductionList:['说明说明说明','说明说明'],  //说明列表
				select:0, //选中的套餐
			};
		},
		methods:{
			//选择套餐
			choose(index){
				this.select = index
				
			}
			
		}
	}
</script>

<style lang="scss">
	.pay_wra{
		height: 88vh;
		background-color: #f4f4f4;
		overflow: hidden;
		.title{
			margin: 63rpx 0 0px 58rpx;
			font-family: Microsoft YaHei;
				font-size: 31rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 40rpx;
				letter-spacing: 0rpx;
				color: #707070;
				
		}
		.list{
			width: 700rpx;
			margin: auto;
			
			display: flex;
			justify-content: space-around;
			align-content: center;
			flex-wrap: wrap;
			.item{
				width: 212rpx;
					height: 185rpx;
					background-color: #ffffff;
					border-radius: 38rpx;
					border: solid 2rpx #ed7259;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin-top: 10px;
					view{
						font-family: Microsoft YaHei;
							font-size: 35rpx;
							font-weight: normal;
							font-stretch: normal;
							line-height: 46rpx;
							letter-spacing: 0rpx;
							color: #ff9335;
					}
				
			}
			.select{
				background-color: #ff9335 !important;
				view{
					color: white !important;
				}
				
			}
			
		}
		.button{
			width: 260rpx;
				height: 87rpx;
				background-color: #ff9335;
				border-radius: 25rpx;
				border: solid 2rpx #ff9335;
				display: flex;
				color: white;
				font-family: Microsoft YaHei;
					font-size: 35rpx;
					font-weight: normal;
					font-stretch: normal;
				align-items: center;
				justify-content: center;
			margin: auto;
			margin-top: 62rpx;
			
		}
		.introduction{
			width: 683rpx;
				min-height: 398rpx;
				background-color: #ffffff;
				border-radius: 60rpx;
				border: solid 2rpx #a7a7a7;
				margin: auto;
				margin-top:75rpx;
				.title{
						font-family: Microsoft YaHei;
						font-size: 35rpx;
						font-weight: normal;
						font-stretch: normal;
						line-height: 46rpx;
						letter-spacing: 0rpx;
						color: #707070;
				}
				.intro_item{
					margin-left: 62rpx;
					margin-top: 10px;
					font-family: Microsoft YaHei;
						font-size: 31rpx;
						font-weight: normal;
						font-stretch: normal;
						line-height: 40rpx;
						letter-spacing: 0rpx;
						color: #707070;
				}
		}
		
	}

</style>
