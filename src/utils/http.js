import axios from 'axios'
import baseURL from './baseURL';
// import store from '../store/index.js'
import { Message } from 'element-ui';
const http = {}


const service = axios.create({
    // baseURL,
    timeout: 5000,
});

// 请求接口前 做一些数据处理 (请求拦截器)
service.interceptors.request.use(function (config) {

    // if (store.state.UserToken) {
    //     config.headers.Authorization = store.state.UserToken
    // }

    return config;
}, function (error) {
    return Promise.reject(error);
});

// 请求接口后 返回数据进行拦截 (响应拦截器)
service.interceptors.response.use(
    res => {
        return res.data
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求出错'
                    break
                case 401:
                    Message.warning({
                        message: '授权失败，请重新登录'
                    })
                    store.commit('LOGIN_OUT')
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000)
                    return
                case 403:
                    err.message = '拒绝访问'
                    break
                case 404:
                    err.message = '请求错误，未找到该资源'
                    break
                case 500:
                    err.message = '服务端出错'
                    break
            }
        } else {
            err.message = '连接服务器失败'
        }
        Message.error({
            message: err.message
        })
        return Promise.reject(err.response)
    });


    http.get = function(url,options){
        return new Promise((resolve,reject) => {
            service
                .get(url,options)
                .then(response => {
                    if(response.code === 0){
                        resolve(response.data)
                    }else{
                        Message.error({
                            message: response.message
                        })
                        reject(response.message)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }

    http.post = function(url,data,options){
        return new Promise((resolve,reject) => {
            service
                .post(url,data,options)
                .then(response => {
                    if(response.code === 0){
                        resolve(response.data)
                    }else{
                        Message.error({
                            message: response.message
                        })
                        reject(response.message)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        })
    }



export default http

/*
   使用export default是指默认使用暴露的变量 且不能存在多个default
   文件引用时import不需要花括号
*/