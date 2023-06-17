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