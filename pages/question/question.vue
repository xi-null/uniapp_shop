<template>
	<Navigator title="语言问答" backUrl="/pages/index/index"></Navigator>
	<view class="question_wra">
		<view class="list">
			<view  v-for="(item,key) in list" :key="index" :class="{question:item.type==0,answer:item.type==1}">
				<view class="text" v-if="item.isEnd">
					<view class="content">{{item.text}}</view>
					<view class="time">{{item.time}}</view>
					
				</view>
				<view class="img" v-else>
						<image :src="item.type==0?'../../static/img/radio.gif':'../../static/img/dot.gif'" ></image>
				</view>
			
			
			</view>
		</view>
		

		<view class="icon" @longpress="startRecord" @touchend="endRecord">

			<image src="../../static/img/record.svg"></image>

			<view class="text">按住说话语音问题</view>
		</view>


	</view>

</template>

<script>
	import {
		voiceToTextAPI
	} from '../../request/index.js'
	export default {
		data() {
			return {
				selected: 1,
				recordManager: '',
				voicePath: '', //录音地址
				text: '', //录音转成的文字
				list:[
				
				], //消息列表
			    
					index:0 //消息列表标识

			};
		},
		mounted() {

			//录音管理器
			this.recordManager = uni.getRecorderManager()
			//监听录音结束
			this.recordManager.onStop(async res => {
				console.log('recorder stop' + JSON.stringify(res));
				this.voicePath = res.tempFilePath;
				// let result = await voiceToTextAPI(this.voicePath)
				// uni.uploadFile({
				// 	url: 'https://124.221.52.24:20235/api/qa/audio2text', //这是你自己后台的连接
				// 	filePath: this.voicePath,
				// 	name: "file", //后台要绑定的名称
				// 	header: {
				// 		"Content-Type": "multipart/form-data"
				// 	},
				// 	success: function(ress) {
				// 		console.log('上传成功，返回内容是: ' + ress.data);
				// 	},
				// 	fail: function(ress) {
				// 		console.log("。。上传服务器 失败", ress);
				// 	},
				// })
				//语音转文字之后
			
					this.isNext = false
					this.list[this.index].text = '问题日撒旦撒旦sad'
					this.list[this.index].isEnd = true
					
				
				
				

			});
			console.log(this.recordManager)
		},
		methods: {
			//开始录音
			startRecord() {
				console.log(11)
				this.recordManager.start();
				let obj = {
					type:0,
					text:'',
					isEnd:false
				}
				this.list.push(obj)
				this.index = this.list.length-1

			},
			//结束
			endRecord() {
				console.log('end')
				this.recordManager.stop()
				let obj = {
					type:1,
					text:'啊实打实阿三阿萨大撒旦',
					isEnd:false
				}
				this.list.push(obj)
				
				setTimeout(()=>{
				
					this.index = this.list.length-1
					this.list[this.index].text = '问题日撒旦撒旦sad'
					this.list[this.index].isEnd = true
				},2000)
				
				
				
			},
			//拿录音去获取回答
			getAnswer(){
				
			}
		}
	}
</script>

<style lang="scss">
	.question_wra {
		height: 88vh;
		position: relative;
		background-color: #f4f4f4;
		overflow: hidden;
       .list{
		   width: 100vw;
		   height: 75vh;
		   margin-top: 113rpx;
		   overflow: scroll;
		   .question{
			   display: flex;
			   justify-content: flex-end;
			   .text{
				   width: 431rpx;
				   padding: 13px;
				   	min-height: 138rpx;
					margin-right: 29rpx;
				   	background-color: #ffffff;
				   	box-shadow: 0rpx 0rpx 19rpx 0rpx 
				   		rgba(0, 0, 0, 0.16);
						
				   	border-radius: 60rpx;
					.content{
							font-family: Microsoft YaHei;
							font-size: 31rpx;
							font-weight: normal;
							font-stretch: normal;
							line-height: 40rpx;
							letter-spacing: 0rpx;
							color: #000000;
					}
				    .time{
						display: flex;
						justify-content: flex-end;
						font-family: Microsoft YaHei;
							font-size: 19rpx;
							font-weight: normal;
							font-stretch: normal;
							line-height: 27rpx;
							letter-spacing: 0rpx;
							color: #000000;
							margin-right:29rpx;
					}
					
					
					
			   }
			   .img{
				   width: 396rpx;
				   	height: 138rpx;
				   	background-color: #ffffff;
				   	box-shadow: 0rpx 0rpx 19rpx 0rpx 
				   		rgba(0, 0, 0, 0.16);
				   	border-radius: 60rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 200rpx;
							height: 100rpx;
					}
				   
			   }
			
		   }
		   .answer{
			   display: flex;
			   justify-content: flex-start;
			   .text{
				   width: 458rpx;
				   	min-height: 254rpx;
				   	background-color: #ff9335;
				   	box-shadow: 0rpx 0rpx 19rpx 0rpx 
				   		rgba(0, 0, 0, 0.16);
				   	border-radius: 60rpx;
					padding: 13px;
					margin-top: 133rpx;
					color: white;
					margin-left: 29rpx;
			   }
			   .img{
				   width: 235rpx;
				   	height: 98rpx;
				   	background-color: #ff9335;
				   	box-shadow: 0rpx 0rpx 19rpx 0rpx 
				   		rgba(0, 0, 0, 0.16);
				   	border-radius: 60rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					image{
							width: 150rpx;
								height: 100rpx;
					}
			   }
		   }
		   
		   
	   }

		.icon {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 146rpx;
			align-items: center;
			position: absolute;
			bottom: 5vh;
			left: 50%;
			transform: translate(-50%);
			height: 146rpx;



			image {
				width: 100%;
				height: 100%;
				background-color: #ffffff;
				border-radius: 50%;
				padding-top: 10px;
				padding-bottom: 10px;



			}

			.text {
				font-family: Microsoft YaHei;
				font-size: 18rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 19rpx;
				letter-spacing: 0rpx;
				color: #707070;

			}
		}

	}
</style>
