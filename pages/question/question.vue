<template>
	<Navigator title="语言问答" backUrl="/pages/index/index" ></Navigator>
	<view class="question_wra">
		<view class="message">
			<view class="queston">
				
			</view>
			<view class="answer">
				
			</view>
			
		</view>
		
			  <view class="icon" @longpress="startRecord" @touchend="endRecord">
				    
			  	<image src="../../static/img/record.svg"></image>
				
			  	<view class="text">按住说话语音问题</view>
			  </view>
		 
	
	</view>

</template>

<script>
	import {voiceToTextAPI} from '../../request/index.js'
	export default {
		data() {
			return {
				selected:1,
				recordManager:'',
				voicePath:'',  //录音地址
				text:'',//录音转成的文字
				
			};
		},
		mounted(){
			
			//录音管理器
			this.recordManager = uni.getRecorderManager()
			//监听录音结束
			this.recordManager.onStop(async res=> {
						console.log('recorder stop' + JSON.stringify(res));
						this.voicePath = res.tempFilePath;
						// let result = await voiceToTextAPI(this.voicePath)
						uni.uploadFile({
							 url: 'https://124.221.52.24:20235/api/qa/audio2text',//这是你自己后台的连接
							          filePath: this.voicePath,
							          name:"file",//后台要绑定的名称
							          header: {
							            "Content-Type": "multipart/form-data"
							          },
									        success:function(ress){
									              console.log('上传成功，返回内容是: '+ress.data);
									            },
												   fail: function(ress){
												            console.log("。。上传服务器 失败",ress);
												          },
						})
						
					});
			console.log(this.recordManager)
		},
		methods:{
			//开始录音
			startRecord(){
				console.log(11)
				this.recordManager.start();
				
			},
			//结束
			endRecord(){
				console.log('end')
				this.recordManager.stop()
			}
		}
	}
</script>

<style lang="scss">
	.question_wra{
		height: 88vh;
		position: relative;
		background-color: #f4f4f4;
		overflow: hidden;
		
		
		.icon{
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 146rpx;
			align-items: center;
			position: absolute;
			bottom: 5vh;
	          left:50%;
			  transform: translate(-50%);
				height: 146rpx;
				
				
				
				image{
					width: 100%;
					height: 100%;
					background-color: #ffffff;
					border-radius: 50%;
					padding-top: 10px;
					padding-bottom: 10px;
					
					
					
				}
				.text{
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
