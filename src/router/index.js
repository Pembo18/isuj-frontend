import { createRouter, createWebHistory } from 'vue-router'
import AllProducts from '@/view/AllProducts.vue'
import AddProduct from '@/view/AddProduct.vue'

const router = createRouter(
    {
        history : createWebHistory(import.meta.env.BASE_URL),
        routes : [
            {
                path: '/',
                name: 'products',
                component: AllProducts
            },
            {
                path: '/add',
                name: 'add',
                component: AddProduct
            },
        ]
    }
)   

export default router