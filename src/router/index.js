import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import LayoutView from '@/views/event/LayoutView.vue'
import DetailsView from '@/views/event/DetailsView.vue'
import RegisterView from '@/views/event/RegisterView.vue'
import EditView from '@/views/event/EditView.vue'

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
      path: '/event/:id/',
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
        },
        {
          path: 'edit',
          name: 'eventEdit',
          component: EditView,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      redirect: {
        name: 'event-list',
      },
    },
  ],
})

export default router
