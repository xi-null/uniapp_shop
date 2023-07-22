const http = uni.$u.http

//问答列表
export const qaListAPI = ({userId,checkAdult,page,size}) =>{
	return http.get(`/api/qa/list/${userId}/${checkAdult}/${page}/${size}`)
}

//语言转文字
export const voiceToTextAPI = (fileUrl)=>http.post('/api/qa/audio2text',{
	file:fileUrl
})

//获取邀请码

export const codeAPI = (userId)=>http.get(`/api/invitation/info/${userId}`)

//更新子女
export const updateChildAPI = (info)=>http.put(`/api/child/info`,info)

//添加子女
export const addChildAPI = (info)=>http.post(`/api/child/register`,info)

//获取子女
export const getChildAPI = (parentId)=>http.get(`/api/child/list/${parentId}`)

//获取子女信息
export const getDetailAPI = (childId,parentId)=>http.get(`/api/child/info/${parentId}/${childId}`)

// 获取问答记录
export const getQaAPI = ({userId,page,size})=>http.get(`/api/qa/list/${userId}/1/${page}/${size}`)
//获取用户信息
export const getUserAPI = (userId)=>http.get(`/api/user/info/${userId}`)

//修改昵称
export const updareUserAPI = (obj)=>http.post(`/api/user/nickname`,obj)

//填写邀请码

export const inviteCodeAPI = (obj)=>http.put(`/api/invitation/commit`,obj)