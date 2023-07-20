import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/Layout1.vue'),
      async beforeEnter(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext){
        const user: boolean = true
        // Zieh den User am besten direkt vom Server mit Axios so hast du immmer den aktuellen user mit rechten und co

        // to sagt wo er hinwill,
        // from woher er kommt
        // next() ist einzig dafür gedacht um den user din die route weiter zu leiten

        if(user){
          // Leite ihn weiter an die Route '/'
          next()
        }
      },
      children: [
        { path: '', name: 'home', component: () => import('@/views/Page1.vue') }
      ]
    },
    {
      path: '/layout2',
      component: () => import('@/layouts/Layout2.vue'),
      async beforeEnter(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext){
        const userPayed: boolean = false

        // Die Route kann nicht betreten werden und wird direkt auf layout 1 wieder verwiesen

        if(!userPayed){
          // Leite ihn weiter an die Route '/layout2' wenn er bezahlt hat, wenn nicht schicke ihn wieder auf die main route '/'
          next({ name: 'home' })
        } else {
          next()
        }

      },
      children: [
        { path: '', name: 'layout2', component: () => import('@/views/Page2.vue') }
      ]
    },
    {
      path: '/layout3',
      component: () => import('@/layouts/Layout3.vue'),
      async beforeEnter(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext){
        const useradmin: boolean = true

        if(useradmin){
          // Leite ihn weiter an die Route '/layout3' wenn er admin ist
          next()
        }
      },
      children: [
        { path: '', name: 'layout3', component: () => import('@/views/Page3.vue') }
      ]
    },
    {
      path: '/layout4',
      async beforeEnter(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext){
        // Next leitet einfach den User weiter ohne next geht das betreten der Route nicht. 
        next()
      },
      component: () => import('@/layouts/Layout4.vue'),
      children: [
        { path: '', name: 'layout4', component: () => import('@/views/Page4.vue') }
      ]
    },
    {
      path: '/layout5',
      async beforeEnter(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext){
        next()
      },
      component: () => import('@/layouts/Layout5.vue'),
      children: [
        { path: '', name: 'layout5', component: () => import('@/views/Page5.vue') }
      ]
    },

  ]
})

export default router
