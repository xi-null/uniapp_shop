<template>
	<view class="index_wra">
		<view class="first">
			<view class="left">
			<view class="role" @click="show=true;selectIcon='../../static/img/go1.svg'">
				 <view class="name">{{role}}</view>
				  <view class="icon">	<image :src="selectIcon"></image></view>
				  
				 <u-picker :show="show" 
				 :columns="selectList"
				 @confirm="confirm" 
				 keyName="label"
				 @cancel="show = false;selectIcon='../../static/img/go2.svg'">
				 </u-picker>					  
			</view>
				<view class="introduction">使用说明</view>
			</view>
			
			<view class="right" @click="scan">
				<image src="../../static/img/scan.svg"></image>
			</view>
		</view>
		<view :class="{list:true,empty:qaList.length==0}">
			  <List :list="qaList" @load="loadMore"  v-if="qaList.length>0"></List>
			  <u-empty
			          mode="history"
			         class="empty"
			  		v-else
			  >
			  </u-empty>
		</view>
	
	    
	</view>
	<Tabbar :selected="selected"></Tabbar>
</template>

<script>
	import {getHttp,getChildAPI,getQaAPI} from '../../request/index.js'
	
	export default {
		data() {
			return {
				selected:0,//导航栏选中
				role:'暂无',  //角色
				roleList:[
				],  //角色列表
				show:false, //角色选择
				selectIcon:'../../static/img/go2.svg', //图片路径
				pageObj:{
					page:1,
					size:3, 
				}, //分页
				qaList:[
				
				]
			}
		},
		async onLoad() {
			uni.hideTabBar()
             console.log(this.selectList)
			 await this.getChildList()
			 await this.loadMore(1)
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
			},
		
		},
		methods: {
			/***
			 角色下拉框变换
			***/
			change(e){
				 let childId = e.id 
				 
				
			},
			//获取角色
			async getChildList(){
				let parentId = uni.getStorageSync('userId')
				let res = await getChildAPI(parentId)
				this.roleList = res.item.children
				this.role = this.roleList[0].nickname
				if(this.roleList.length==0){
					this.role='暂无'
				}
			},
			confirm(e){
					console.log(e.value[0],'role')
				this.selectIcon='../../static/img/go2.svg'
				this.role = e.value[0].label
				this.show = false
			
			},
			//扫码功能
			scan(){
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});

			},
			async loadMore(page){
				console.log(this.roleList,'load')
				let userId = this.roleList.find(item=>item.nickname==this.role).childId
				//子组件发布更新事件
				let res = await getQaAPI({userId,page,size:3})
				
				
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
		     
			   margin: 58rpx 35rpx 30rpx 35rpx ;
			    
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
					height: 1000rpx;
					margin: auto;
					overflow: scroll;
					
				
			}
			.empty{
				display: flex;
				align-items: center;
				justify-content: center;
			}
	}

</style>
