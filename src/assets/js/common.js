// common.js
// import axios from 'axios';

// // Axios 인스턴스 생성
// const api = axios.create({
// 	baseURL: 'https://reqres.in/api',
//   });

// // 요청 보내기 전에 헤더에 토큰 추가
// api.interceptors.request.use(config => {
// 	const token = localStorage.getItem('token');
// 	console.log(token)
// 	if (token) {
// 		config.headers.Authorization = `Bearer ${token}`;
// 	}
// 	return config;
// });