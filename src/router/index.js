import {
    Home,
    Find,
    Order,
    Mine,
    Login,
    List,
    Category
} from "@pages"

export const TabBarRouter = [
    {
        path:"/home",
        icon:"\ue628",
        name:"首页",
        meta:{
            flag:true
        },
        component:Home
    },
    {
        path:"/find",
        icon:"\ue663",
        name:"发现",
        meta:{
            flag:true
        },
        component:Find
    },
    {
        path:"/order",
        name:"订单",
        icon:"\ue737",
        meta:{
            flag:true
        },
        component:Order
    },
    {
        path:"/mine",
        name:"我的",
        icon:"\ue617",
        meta:{
            flag:true
        },
        component:Mine
    },
    {
        path:"/mine",
        name:"我的",
        icon:"\ue617",
        meta:{
            flag:true
        },
        component:Mine
    }
]

export const noTabBarRouter = [
    {
        path:"/login",
        meta:{
            flag:false,
            auth:false
        },
        component:Login
    },{
        path:"/category/:id",
        meta:{
            flag:false,
            auth:false
        },
        component:Category
    },  {
        path:"/list",
        meta:{
            flag:false,
            auth:false
        },
        component:List
    }
]

export const RouteConfig = TabBarRouter.concat(noTabBarRouter)