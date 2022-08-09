<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Sortable, Plugins } from '@shopify/draggable'

const $log = inject('$log')

const items = reactive(['item1', 'item2', 'item3', 'item4', 'item5'])

let sortable = null

onMounted(() => {
  sortable = new Sortable(document.querySelectorAll('ul.PluginCollidable'), {
    draggable: 'li', // containers 中想拖曳的元素
    collidables: '.other-list', // 可被碰撞的元素
    plugins: [Plugins.Collidable],

    // 想排除的功能
    // exclude: {
    //   plugins: [Draggable.Plugins.Focusable],
    //   sensors: [Draggable.Sensors.TouchSensor],
    // },

    // 拖過元素時，想添加的 className
    classes: {
      'draggable:over': ['draggable--over'],
    },
  })

  // sortable.on('drag:start', () => console.log('drag:start'))
  // sortable.on('drag:move', () => console.log('drag:move'))
  // sortable.on('drag:stop', () => console.log('drag:stop'))
  // sortable.on('drag:over:container', (e) => $log('drag:over:container', e))

  sortable.on('collidable:in', (e) => $log('collidable:in', e))
  sortable.on('collidable:out', (e) => $log('collidable:out', e))
})

onUnmounted(() => {
  sortable.destroy()
})
</script>

<template>
  <section>
    <h2>Plugin Collidable</h2>
    <p>
      非預設。建立一個碰撞區域，draggable
      元素無法拖曳到這裡。有撞進來跟撞出去事件(collidable:in, collidable:out)
    </p>
    <ul class="flex gap-2 PluginCollidable py-2">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="cursor-pointer p-1"
      >
        {{ item }}
      </li>
    </ul>

    <div class="other-list bg-red-500 mt-5 p-5">collidable</div>
  </section>
</template>

<style lang="scss" scoped>
ul {
  background-color: pink;
}
.draggable--over {
  background-color: red;
  transition: all 0.3s;
}
</style>
