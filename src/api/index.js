import axios from '../utils/http'
import store from '../store'

// 用户权限路由表
export function fetchPermission(){
    return axios.get(`/api/permission?user=${store.state.UserToken}`)
}

// 用户登录
export function login(user){
    return axios.get(`/api/login?user=${user}`)
}