const http = uni.$u.http

//问答列表
const qaListAPI = ({userId,checkAdult,page,size}) =>{
	return http.get(`/api/qa/list/${userId}/${checkAdult}/${page}/${size}`)
}