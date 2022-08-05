<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Draggable } from '@shopify/draggable'

const $log = inject('$log')

const arr = [...Array(30)].map((v, i) => `item${i + 1}`)
const items = reactive(arr)

let draggable = null

onMounted(() => {
  const customScrollableElements = document.querySelectorAll(
    '.my-custom-scroll-elements'
  )

  draggable = new Draggable(document.querySelectorAll('ul.PluginScrollable'), {
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
    scrollable: {
      speed: 6,
      sensitivity: 12,
      scrollableElements: [...customScrollableElements],
    },
  })

  draggable.on('drag:start', () => console.log('drag:start'))
  draggable.on('drag:move', () => console.log('drag:move'))
  draggable.on('drag:stop', () => console.log('drag:stop'))
  draggable.on('drag:over:container', (e) => $log('drag:over:container', e))
  draggable.on('drag:pressure', () => alert('drag:presure'))
})

onUnmounted(() => {
  draggable.destroy()
})
</script>

<template>
  <section>
    <h2>Draggable Plugin Scrollable</h2>
    <p>可捲動</p>
    <ul class="flex gap-2 PluginScrollable flex-col">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="cursor-pointer p-1"
      >
        {{ item }}
      </li>
    </ul>
    <div
      class="my-custom-scroll-elements flex flex-col"
      v-for="(item, index) in ['a', 'b', 'c']"
      :key="index"
    >
      {{ item }}
    </div>
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
