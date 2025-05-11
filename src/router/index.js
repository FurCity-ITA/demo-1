import { createRouter,createWebHashHistory } from "vue-router";

const routes =[
    {
        path:'/',
        name:'Home',
        component:()=>import('@/views/index.vue')
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path:'/News',
        name:'News',
        component:()=>import('@/views/News.vue')
    },
    {
        path:'/Archive',
        name:'Archive',
        component:()=>import('@/views/Archive.vue')
    },
    {
        path:'/Apply',
        name:'Apply',
        component:()=>import('@/views/Apply.vue')
    },
    {
        path:'/Arms',
        name:'Arms',
        component:()=>import('@/views/Arms.vue')
    },
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes
})
export default router