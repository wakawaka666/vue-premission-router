/**
 * 全路由结构定义
 */


// 订单管理
const Order = () => import('../views/order-manage/index')
const OrderList = () => import('../views/order-manage/order-list/index')
const ProductManage = () => import('../views/order-manage/product-manage/index')
const ProductionList = () => import('../views/order-manage/product-manage/product-list/index')
const ReviewManage = () => import('../views/order-manage/product-manage/review-manage/index')
const ReturnGoods = () => import('../views/order-manage/return-goods/index')


// 产品管理
const Goods = () => import('../views/goods-manage/index')
const GoodsList = () => import('../views/goods-manage/goods-list/index')
const GoodsClassify = () => import('../views/goods-manage/goods-classify/index')

// 需要权限判断得路由
const dynamicRoutes = [
    {
        path: '/order',
        name: 'order-manage',
        component: Order,
        meta: {
            name: '订单管理',
            icon: 'icon-email'
        },
        children: [
            {
                path: 'list',
                name: 'order-list',
                component: OrderList,
                meta: {
                    name: '订单列表',
                    icon: 'icon-email'
                }
            },
            {
                path: 'product',
                name: 'product-manage',
                component: ProductManage,
                meta: {
                    name: '生产管理',
                    icon: 'icon-email'
                },
                children: [
                    {
                        path: 'list',
                        name: 'product-list',
                        component: ProductionList,
                        meta: {
                            name: '生产列表',
                            icon: 'icon-email'
                        },
                    },
                    {
                        path: 'review',
                        name: 'review-manage',
                        component: ReviewManage,
                        meta: {
                            name: '审核管理',
                            icon: 'icon-email'
                        },
                    }
                ]
            },
            {
                path: 'return',
                name: 'return-goods',
                component: ReturnGoods,
                meta: {
                    name: '退货管理',
                    icon: 'icon-email'
                }
            }
        ]
    },
    {
        path: '/goods',
        name: 'goods-manage',
        component: Goods,
        meta: {
            name: '产品管理',
            icon: 'icon-email'
        },
        children: [
            {
                path: '/list',
                name: 'goods-list',
                component: GoodsList,
                meta: {
                    name: '产品列表',
                    icon: 'icon-email'
                }
            },
            {
                path: '/classify',
                name: 'goods-classify',
                component: GoodsClassify,
                meta: {
                    name: '产品分类',
                    icon: 'icon-email'
                }
            }
        ]
    }
]

export default dynamicRoutes