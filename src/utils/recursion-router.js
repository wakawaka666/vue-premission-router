// 方法一：比对路由权限
/**
 * 
 * @param {Array} userRouter 后端返回用户路由数据
 * @param {Array} allRouter 前端配置好的全路由
 * @returns {Array} realRoutes 匹配后的路由
 */
export function recursionRouter(userRouter = [], allRouter = []) {
    const realRoutes = []
    allRouter.forEach((v, i) => {
        userRouter.forEach((item, index) => {
            if (item.name === v.meta.name) {
                // 如果有子元素，继续递归比对
                if (item.children && item.children.length > 0) {
                    v.children = recursionRouter(item.children, v.children)
                }
                realRoutes.push(v) //因为v是写好得路由
            }
        })
    })
    return realRoutes
}



// 方法二：指定返回得默认路由
export function setDefaultRouter(routes) {
    routes.forEach((v, i) => {
        if (v.children && v.children.length > 0) {
            v.redirect = { path: v.children[0].path }
            setDefaultRouter(v.children)
        }
    })
}