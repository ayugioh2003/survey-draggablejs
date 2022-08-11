<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Draggable } from '@shopify/draggable'

const $log = inject('$log')

const items = reactive(['item1', 'item2', 'item3'])

let draggable = null

onMounted(() => {
  draggable = new Draggable(document.querySelectorAll('ul.PluginFocusable'), {
    draggable: 'li', // containers 中想拖曳的元素

    // 想排除的功能
    exclude: {
      plugins: [Draggable.Plugins.Focusable],
      // sensors: [Draggable.Sensors.TouchSensor],
    },

    // 拖過元素時，想添加的 className
    classes: {
      'draggable:over': ['draggable--over'],
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
    <h2>Draggable Plugin Focusable</h2>
    <p>
      預設 Draggable 有帶入 Focusable，所以會直接有 tabindex
      效果(這個區塊為了凸顯效果，取消 tabindex)
    </p>
    <ul class="flex gap-2 PluginFocusable">
      <li
        v-for="(item, index) in items"
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
