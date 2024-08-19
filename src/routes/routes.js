import DashboardLayout from '@/views/layout/DashboardLayout.vue';
import PageInit from '@/views/pages/PageInit.vue'
/* import NotFound from '@/views/NotFoundPage.vue'; */

const routes = [
  {
    path: '/',
    redirect: 'init',
    component: PageInit,
    children: [
      {
        path: '/init',
        name: 'init',
        component: () => import('../views/pages/InformationPage.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../views/pages/registerPages/Register.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/pages/Login.vue')
      },
    ],
  },
  {
    path: '/dashboard',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/contentLayout/DashboardInit.vue')
      },
      {
        path: '/hola',
        name: 'hola',
        component: () => import('../views/saludoHola.vue')
      },
    ]
  },
];

export default routes;
