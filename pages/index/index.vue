<template>
	<view class="index_wra">
		<view class="first">
			<view class="left">
			<view class="role" @click="show=true">
				 <view class="name">{{role}}</view>
				  <view class="icon">	<image :src="selectIcon"></image></view>
				  
				 <u-picker :show="show" 
				 :columns="selectList"
				 @confirm="confirm" 
				 keyName="label"
				 @cancel="show = false">
				 </u-picker>					  
			</view>
				<view class="introduction">使用说明</view>
			</view>
			
			<view class="right">
				<image src="../../static/img/scan.svg"></image>
			</view>
		</view>
		<view class="list">
			  <List :list="qaList"></List>
		</view>
	    
	</view>
	<Tabbar :selected="selected"></Tabbar>
</template>

<script>
	import {getHttp} from '../../request/index.js'
	
	export default {
		data() {
			return {
				title: 'Hello',
				selected:0,//导航栏选中
				role:'角色1',  //角色
				roleList:[
					{nickname:"角色1",childId:0},
					{nickname:'角色2',childId:1}
				],  //角色列表
				show:false, //角色选择
				selectIcon:'../../static/img/go2.svg', //图片路径
				qaList:[{
                    "qaId": "string",
                    "questionText": "string",
                    "answerText": "string",
                    "askTime": "string",
                    "answerTime": "string",
                    "hasError": true,
                    "errorMsg": "string"
                },
				{
				    "qaId": "string",
				    "questionText": "string",
				    "answerText": "string",
				    "askTime": "string",
				    "answerTime": "string",
				    "hasError": true,
				    "errorMsg": "string"
				},
				{
				    "qaId": "string",
				    "questionText": "string",
				    "answerText": "string",
				    "askTime": "string",
				    "answerTime": "string",
				    "hasError": true,
				    "errorMsg": "string"
				}
				]
			}
		},
		onLoad() {
			uni.hideTabBar()
             console.log(this.selectList)
		},
		computed:{
			//下拉框数据要求
			selectList(){
				return [this.roleList.map(item=>{
					return {
						label:item.nickname,
						id:item.childId
					}
						
					
				})]
			}
		},
		methods: {
			/***
			 角色下拉框变换
			***/
			change(e){
				
				console.log(e)
				
			},
			confirm(e){
				console.log(e)
			}
			

		}
	}
</script>

<style lang='scss' >
	.index_wra{
		height: 90vh;
		background-color: #f4f4f4;
		width: 100vw;
		overflow: hidden;
		.first{
			width: 680rpx;
		     
			   margin: 58rpx 35rpx 77rpx 35rpx ;
			    
			height:130rpx;
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
		  .left{
			  display: flex;
			  flex-direction: column;
			  justify-content: flex-start;
			  
			  .role{
				width: 302rpx;
				height: 100rpx;
				background-color: #ffffff;
				box-shadow: 0rpx 0rpx 15rpx 0rpx 
				rgba(0, 0, 0, 0.16);
				border-radius: 56rpx;
				display: flex;
				align-items: center;
				justify-content: center;
								.name{
										
										
											height: 40rpx;
												font-family: Microsoft YaHei;
												font-size: 31rpx;
												font-weight: normal;
												font-stretch: normal;
												line-height: 40rpx;
												letter-spacing: 0rpx;
												color: #000000;
								}
				.icon{
					width: 19px;
					height: 15px;
					margin-left: 10rpx;
				
					 image{
						 width: 100%;
						 height: 100%;
					 }
	
				}
				
			
			  }
			  
			  .introduction{
				 
				  	width: 92rpx;
				  	height: 31rpx;
				  	font-family: Microsoft YaHei;
				  	font-size: 23rpx;
				  	font-weight: normal;
				  	font-stretch: normal;
				  	line-height: 31rpx;
				  	letter-spacing: 0rpx;
				  	color: #707070;
					margin-left: 50rpx;
					margin-top: 10rpx;
					text-decoration: underline;
				  
			  }
			  
			  
		  }
		}
		.right{
			width: 108rpx;
				height: 108rpx;
				background-color: #fde7d5;
				image{
					width: 100%;
					height: 100%;
					
				}
		}	
			.list{
				width: 692rpx;
					height: 600rpx;
					margin: auto;
					overflow: scroll;
			}
	}

</style>
