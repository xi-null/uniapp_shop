/***
 by wwh
***/
const http = uni.$u.http
// 获取http实例
export const getHttp = ()=>{
	return http  
}

//接口设计
//登录接口
/***
	code：获取到微信的code
***/
export const login = (params, config = {}) => http.post('/api/user/login', params, config)