<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Swappable } from '@shopify/draggable'

const $log = inject('$log')

const items = reactive(['item1', 'item2', 'item3', 'item4', 'item5'])
const items2 = reactive(['item6', 'item7', 'item8', 'item9', 'item10'])

let swappable = null

onMounted(() => {
  swappable = new Swappable(document.querySelectorAll('ul.Swappable'), {
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

  swappable.on('swappable:start', (e) => $log('swappable:start', e))
  swappable.on('swappable:swap', (e) => $log('swappable:swap', e))
  swappable.on('swappable:swapped', (e) => $log('swappable:swapped', e))
  swappable.on('swappable:stop', (e) => $log('swappable:end', e))
  // sortable.on('drag:over:container', (e) => $log('drag:over:container', e))
})

onUnmounted(() => {
  swappable.destroy()
})
</script>

<template>
  <section>
    <h2>Swappable Default</h2>
    <p>可交換。直接互換元素位置</p>
    <ul class="flex gap-2 Swappable py-2">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="cursor-pointer p-1"
      >
        {{ item }}
      </li>
    </ul>

    <ul class="flex gap-2 Swappable py-2 mt-10">
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
