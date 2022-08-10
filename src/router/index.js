import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

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
      component: () =>
        import(/* @vite-ignore */ '@/views/Demo1DraggableView.vue'),
    },
    {
      path: '/demo2Droppable',
      name: 'demo2Droppable',
      component: () =>
        import(/* @vite-ignore */ '@/views/Demo2DroppableView.vue'),
    },
    {
      path: '/demo3Plugins',
      name: 'demo3Plugins',
      component: () =>
        import(/* @vite-ignore */ '@/views/Demo3PluginsView.vue'),
    },
    {
      path: '/demo4Sortable',
      name: 'demo4Sortable',
      component: () =>
        import(/* @vite-ignore */ '@/views/Demo4SortableView.vue'),
    },
    {
      path: '/demo5Swappable',
      name: 'demo5Swappable',
      component: () =>
        import(/* @vite-ignore */ '@/views/Demo5SwappableView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* @vite-ignore */ '@/views/AboutView.vue'),
    },
  ],
})

export default router
