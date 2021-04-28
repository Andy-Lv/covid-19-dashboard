import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const views = name => () => import('@/views/' + name);
const router = createRouter({
    history: createWebHashHistory(),
    routes: [

        {
            path: '/',
            name: 'world',
            component: views('ViewWorld')
        }


    ]
})

export default router