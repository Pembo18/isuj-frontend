import { createRouter, createWebHistory } from 'vue-router'
import AllProducts from '@/view/AllProducts.vue'

const router = createRouter(
    {
        history : createWebHistory(import.meta.env.BASE_URL),
        routes : [
            {
                path: '/',
                name: 'products',
                component: AllProducts
            }
        ]
    }
)

export default router