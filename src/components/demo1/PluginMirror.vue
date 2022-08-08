<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Draggable } from '@shopify/draggable'

const $log = inject('$log')

const items = reactive(['item1', 'item2', 'item3'])

let draggable = null

onMounted(() => {
  draggable = new Draggable(document.querySelectorAll('ul.pluginMirror'), {
    draggable: 'li', // containers 中想拖曳的元素

    // 想排除的功能
    // exclude: {
    //   plugins: [Draggable.Plugins.Mirror],
    // },

    // 拖過元素時，想添加的 className
    classes: {
      'draggable:over': ['draggable--over'],
    },

    mirror: {
      constrainDimensions: true,
      cursorOffsetX: 10,
      cursorOffsetY: 10,
      xAxis: false,
    },
  })

  draggable.on('drag:start', () => console.log('drag:start'))
  draggable.on('drag:move', () => console.log('drag:move'))
  draggable.on('drag:stop', () => console.log('drag:stop'))
  draggable.on('drag:over:container', (e) => $log('drag:over:container', e))

  draggable.on('mirror:create', (e) => $log('mirror:create', e))
})

onUnmounted(() => {
  draggable.destroy()
})
</script>

<template>
  <section>
    <h2>Draggable Plugin Mirror</h2>
    <p>控制拖曳中的鏡像元素。如只能在 Y 軸移動</p>
    <ul class="flex gap-2 pluginMirror">
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
