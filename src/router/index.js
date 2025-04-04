import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            redirect: '/welcome-pikachu',
            children: [
                {
                    path: '/welcome-pikachu',
                    name: 'WelcomePikachu',
                    component: () => import('@/views/pages/WelcomePikachu.vue')
                },
                {
                    path: '/loading-pokebola',
                    name: 'loadingPokebola',
                    component: () => import('@/views/pages/LoadingPokebola.vue')
                },
                {
                    path: '/list-pokemons',
                    name: 'listPokemons',
                    component: () => import('@/views/pages/listPokemons.vue')
                },
                {
                    path: '/Documentation',
                    name: 'documentation',
                    component: () => import('@/views/pages/documentation.vue')
                }
            ]
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        }
    ],
    scrollBehavior() {
        return { left: 0, top: 0 };
    }
});

export default router;
