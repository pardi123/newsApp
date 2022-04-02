import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultLayout from '@/layout/defaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import teslaNews from '@/views/teslaNews.vue'
import busnisesNews from '@/views/busnisesNews.vue'
import techCrunch from '@/views/TechCrunchNews.vue'
import wallStreetNews from '@/views/wallStreetNews.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'defaultLayout',
        component: defaultLayout,
        children: [

            {
                path: '/',
                name: 'HomeView',
                component: HomeView,

            },
            {
                path: '/testlaNews',
                name: 'teslaNews',
                component: teslaNews,
            },
            {
                path: '/busnisesNews',
                name: 'busnisesNews',
                component: busnisesNews,
            },
            {
                path: '/TechCrunchNews',
                name: 'Techcrunch',
                component: techCrunch,
            },
            {
                path: '/wallStreetNews',
                name: 'wallStreetNews',
                component: wallStreetNews,
            },


        ]
    },

    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router