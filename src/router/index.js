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
    {
        path:'/Fcs',
        name:'Fcs',
        component:()=>import('@/views/Fcs.vue')
    },
    {
        path:'/Visitor',
        name:'Visitor',
        component:()=>import('@/views/Visitor.vue')
    },
    {
        path:'/About',
        name:'About',
        component:()=>import('@/views/About.vue')
    },
    {
        path:'/Ticket',
        name:'Ticket',
        component:()=>import('@/views/Ticket.vue')
    },
    {
        path:'/Map',
        name:'Map',
        component:()=>import('@/views/Map.vue')
    },
    {
        path:'/Media',
        name:'Media',
        component:()=>import('@/views/Media.vue')
    },
    {
        path:'/Stats',
        name:'Stats',
        component:()=>import('@/views/Stats.vue')
    },
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes
})
export default router