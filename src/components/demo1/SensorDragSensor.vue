<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Draggable, Sensors } from '@shopify/draggable'

const $log = inject('$log')

const items = reactive(['item1', 'item2', 'item3'])

let draggable = null

onMounted(() => {
  draggable = new Draggable(document.querySelectorAll('ul.SensorDragSensor'), {
    draggable: 'li', // containers 中想拖曳的元素

    // Sensors
    sensors: [Sensors.DragSensor],

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

  draggable.on('drag:start', () => console.log('drag:start'))
  // draggable.on('drag:move', () => console.log('drag:move'))
  // draggable.on('drag:stop', () => console.log('drag:stop'))
  draggable.on('drag:over:container', (e) => $log('drag:over:container', e))

  draggable.removeSensor(Sensors.MouseSensor)

  // console.log('draggable', draggable)
})

onUnmounted(() => {
  draggable.destroy()
})
</script>

<template>
  <section>
    <h2>Draggable Sensor DragSensor</h2>
    <p>監聽原生 drag:start, drag:move, drag:stop 事件，所以不會有 mirror</p>
    <ul class="flex gap-2 SensorDragSensor">
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
