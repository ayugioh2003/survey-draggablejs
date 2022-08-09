<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Sortable } from '@shopify/draggable'

const $log = inject('$log')

const items = reactive(['item1', 'item2', 'item3', 'item4', 'item5'])
const items2 = reactive(['item6', 'item7', 'item8', 'item9', 'item10'])

let sortable = null

onMounted(() => {
  sortable = new Sortable(document.querySelectorAll('ul.Sortable'), {
    draggable: 'li', // containers 中想拖曳的元素

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

  sortable.on('sortable:start', (e) => $log('sortable:start', e))
  sortable.on('sortable:sort', (e) => $log('sortable:sort', e))
  sortable.on('sortable:sorted', (e) => $log('sortable:sorted', e))
  sortable.on('sortable:stop', (e) => $log('sortable:end', e))
  // sortable.on('drag:over:container', (e) => $log('drag:over:container', e))
})

onUnmounted(() => {
  sortable.destroy()
})
</script>

<template>
  <section>
    <h2>Sortable Default</h2>
    <p>可排序</p>
    <ul class="flex gap-2 Sortable py-2">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="cursor-pointer p-1"
      >
        {{ item }}
      </li>
    </ul>

    <ul class="flex gap-2 Sortable py-2 mt-10">
      <li
        v-for="(item, index) in items2"
        :key="index"
        class="cursor-pointer p-1"
      >
        {{ item }}
      </li>
    </ul>
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
