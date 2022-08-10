import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/demo1Draggable',
      name: 'demo1Draggable',
      component: () => import('../views/Demo1DraggableView.vue'),
    },
    {
      path: '/demo2Droppable',
      name: 'demo2Droppable',
      component: () => import('../views/Demo2DroppableView.vue'),
    },
    {
      path: '/demo3Plugins',
      name: 'demo3Plugins',
      component: () => import('../views/Demo3PluginsView.vue'),
    },
    {
      path: '/demo4Sortable',
      name: 'demo4Sortable',
      component: () => import('../views/Demo4SortableView.vue'),
    },
    {
      path: '/demo5Swappable',
      name: 'demo5Swappable',
      component: () => import('../views/Demo5SwappableView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
