import { fetchPermission } from '../../api/index' // 后端用户路由表数据
import router, { DynamicRoutes } from '../../router/index' // 初始化路由,根路由
import dynamicRouter from '../../router/dynamic-router' // 前端全路由
import { recursionRouter, setDefaultRouter } from '../../utils/recursion-router' //匹配后的路由,指定返回默认路由

export default {
    namespaced: true,
    state: {
        permissionList: null, // 所有路由
        sidebarMenu: [], // 导航菜单
        currentMenu: '', // 高亮
    },
    getters: {},
    mutations: {
        // 设置用户权限数据
        SET_PERMISSION(state, routes) {
            state.permissionList = routes
        },
        // 清理用户权限数据
        CLEAR_PERMISSION(state) {
            state.permissionList = null
        },
        // 设置菜单
        SET_MENU(state, menu) {
            state.sidebarMenu = menu
        },
        // 清理菜单
        CLEAR_MENU(state) {
            state.sidebarMenu = []
        }
    },
    actions: {
        // 获取用户路由表
        async FETCH_PERMISSION({ commit, state }) {
            let permissionList = await fetchPermission()
            // 路由权限筛选
            let routes = recursionRouter(permissionList, dynamicRouter)
            let mainContainer = DynamicRoutes.find(v => v.path === '')
            const { children } = mainContainer
            children.push(...routes)
            // 生成菜单
            commit('SET_MENU', children)
            // 设置默认路由
            setDefaultRouter([mainContainer])
            // 初始化路由
            let initialRoutes = router.options.routes
            router.addRoutes(DynamicRoutes)
            commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
        }

    }
}