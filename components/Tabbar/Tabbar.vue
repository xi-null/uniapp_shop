<template>
  <view class="tab-bar">
    <view v-for="(item,index) in list" :key="index" class="tab-bar-item" @click="switchTab(item, index)">
      <image class="tab_img" :src="selected === index ? item.selectedIconPath : item.iconPath"></image>
      <view class="tab_text" :style="{color: selected === index ? selectedColor : color}">{{item.text}}</view>
    </view>
  </view>
</template>
<script>
  export default {
    props: {
      selected:{
		  type:Number,
		  default:0
	  }
    },
    data() {
      return {
        color: "#333333",
        selectedColor: "#000000",
        list: [
          {
            "pagePath": "/pages/index/index",
            "text": "问和答",
            "iconPath": "../../static/img/QA1.svg",
            "selectedIconPath": "../../static/img/QA2.svg",
          },
          {
            "pagePath": "/pages/question/question",
            "text": "语音问答",
            "iconPath": "../../static/img/logo.svg",
            "selectedIconPath": "../../static/img/logo.svg",
          },
          {
            "pagePath": "/pages/center/center",
            "text": "我的",
            "iconPath": "../../static/img/me1.svg",
            "selectedIconPath": "../../static/img/me2.svg",
          },
   
        ]
      }
    },
    methods: {
      switchTab(item, index) {
        console.log("item", item)
        console.log("index", index)
        let url = item.pagePath;
	  if(index==1){
		  uni.navigateTo({
		  	url
		  })
		  return 
	  }
        uni.switchTab({
            url
        })
      }
    }
  }
</script>
 
<style lang="less">
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
      padding-bottom: env(safe-area-inset-bottom); // 适配iphoneX的底部
   
    display: flex;
    justify-content: center;
    align-items: flex-end;
   
		width: 100vw;
			height: 8vh;
		background-color: #ffe3cb;
		
	
  .tab-bar-item {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffe3cb;
	
  
    .tab_img {
        	width: 54rpx;
        	height: 54rpx;
    }
  
    .tab_text {
        font-size: 25rpx;
        margin-top: 9rpx;
	
    }
  }
  .tab-bar-item:nth-child(2){
  	
  	 background-color: #ffe3cb;
       padding:10px 10px 0 10px;
  	
  	 	background-color: #ffe3cb;
  		flex: none;
  		border-radius: 50%;
  			
  	 
  	
  
  	
  	.tab_img{
  	
  	width: 102rpx;
  		height: 102rpx;
	
  			  	
  	}
	.tab_text{
		margin-top: 15rpx;
	}
  }
  }
</style>

