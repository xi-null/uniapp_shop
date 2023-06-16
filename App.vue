<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-plus/index.scss";
</style>

<script>
		import {login} from './request/index.js'
	export default {
		onLaunch: function() {
			login(){
				uni.login({
					"provider": "weixin",
					"onlyAuthorize": true, // 微信登录仅请求授权认证
					success: function(event){
						const {code} = event
						console.log(event.code)
						//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
						const data = {
							code:event.code
						}
						login(data).then(res=>{
							console.log(res)
						// 		uni.setStorageSync('accessToken',res.data.item.accessToken)
						// 		uni.setStorageSync('userId',res.data.item.userId)
						// 		uni.setStorageSync('refreshToken',res.data.item.refreshToken)
						// 		uni.setStorageSync('openid',res.data.item.openid)
						// 		uni.setStorageSync('nickname',res.data.item.nickname)
						})
						// uni.request({
						// 	header: {
						// 		'Content-Type': 'application/x-www-form-urlencoded'
						// 	},
						// 	url: 'http://124.221.52.24:20235/api/user/login', 
						// 	data: {
						// 		code: event.code
						// 	},
						// 	method:'POST',
						// 	success: (res) => {
						// 		console.log(res)
						// 		uni.setStorageSync('accessToken',res.data.item.accessToken)
						// 		uni.setStorageSync('userId',res.data.item.userId)
						// 		uni.setStorageSync('refreshToken',res.data.item.refreshToken)
						// 		uni.setStorageSync('openid',res.data.item.openid)
						// 		uni.setStorageSync('nickname',res.data.item.nickname)
						// 	},
						// 	fail() {
						// 		console.log('请求失败')
						// 	}
						// });
					},
					fail: function (err) {
						console.log('登录失败')
						}
					})
			}
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

