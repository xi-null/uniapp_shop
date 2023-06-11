<template>
	<view class="question_wra">
		<view class="message">
			<view class="queston">
				
			</view>
			<view class="answer">
				
			</view>
			
		</view>
		<view class="icon"></view>
	</view>
	<Tabbar :selected="selected"></Tabbar>
</template>

<script>
	export default {
		data() {
			return {
				selected:1
			};
		}
	}
</script>

<style lang="scss">
	.question_wra{
		height: 90vh;
	}

</style>
