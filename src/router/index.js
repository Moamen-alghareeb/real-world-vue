import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import LayoutView from '@/views/event/LayoutView.vue'
import DetailsView from '@/views/event/DetailsView.vue'
import RegisterView from '@/views/event/RegisterView.vue'
import EditView from '@/views/event/EditView.vue'
import NotFoundView from '@/views/errors/NotFoundView.vue'
import NetworkErrorView from '@/views/errors/NetworkErrorView.vue'

const About = () => import('../views/AboutView.vue')
const NotFound = () => import('../views/errors/NotFoundView.vue')
const EventNotFound = () => import('../views/errors/NotFoundView.vue')
const NetworkError = () => import('../views/errors/NetworkErrorView.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/event/:id',
      name: 'layout',
      component: LayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'eventDetails',
          component: DetailsView,
        },
        {
          path: 'register',
          name: 'eventRegister',
          component: RegisterView,
          // params:{}
        },
        {
          path: 'edit',
          name: 'eventEdit',
          component: EditView,
        },
      ],
    },
    // {
    //   path: '/events/:afterEvent(.*)',
    //   redirect: (to) => ({ path: '/event/' + to.params.afterEvent }),
    // },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
    {
      path: '/home',
      name: 'home',
      redirect: {
        name: 'event-list',
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/404/:resource',
      name: 'EventNotFound',
      component: EventNotFound,
      props: true,
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError,
    },
    // {
    //   path: '/:catchAll(.*)',
    //   redirect: { name: '404' },
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
