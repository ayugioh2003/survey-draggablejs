import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import Demo1View from '@/views/Demo1DraggableView.vue'
// import Demo2View from '@/views/Demo2DroppableView.vue'
// import Demo3View from '@/views/Demo3PluginsView.vue'
import Demo4View from '@/views/Demo4SortableView.vue'
import Demo5View from '@/views/Demo5SwappableView.vue'

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
      component: Demo5View,
    },
  ],
})

export default router
