import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//请求拦截器
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
})

//响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log(error);

    return Promise.reject(error);
})

//封装axios的post请求
export function fetch(url: string, params?: any,) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((response) => { resolve(response.data) }).catch(error => reject(error))
    })
}

export default {
    mockdata(url: string, params?: any,) {
        return fetch(url, params)
    }
}