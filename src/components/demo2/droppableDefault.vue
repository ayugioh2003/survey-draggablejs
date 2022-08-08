<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Droppable } from '@shopify/draggable'

const $log = inject('$log')

let droppable = null

onMounted(() => {
  droppable = new Droppable(document.querySelectorAll('.container'), {
    draggable: '.item', // containers 中想拖曳的元素
    dropzone: '.dropzone', // 可降肉的區域

    // 想排除的功能
    // exclude: {
    //   plugins: [Draggable.Plugins.Focusable],
    //   sensors: [Draggable.Sensors.TouchSensor],
    // },

    // 拖過元素時，想添加的 className
    classes: {
      'draggable:over': ['draggable--over'],
      // 'droppable:active': ['draggable-droppable--active'],
    },
  })

  droppable.on('droppable', (e) => $log('droppable', e))
  droppable.on('droppable:start', (e) => $log('droppable:start', e))
  droppable.on('droppable:dropped', (e) => $log('droppable:dropped', e))
  droppable.on('droppable:returned', (e) => $log('droppable:returned', e))
  droppable.on('droppable:stop', (e) => $log('droppable:stop', e))
})

onUnmounted(() => {
  droppable.destroy()
})
</script>

<template>
  <section>
    <h2>Droppable Basic</h2>
    <p>
      建立於 Draggable 之上。可降肉的元素。有事件 droppable:start, dropped,
      returned, stop
    </p>

    <div class="container">
      <div class="dropzone draggable-dropzone--occupied">
        <div class="item">A</div>
      </div>
      <div class="dropzone draggable-dropzone--occupied">
        <div class="item">B</div>
      </div>
      <div class="dropzone draggable-dropzone--occupied">
        <div class="item">C</div>
      </div>
    </div>

    <div class="container mt-20">
      <div class="dropzone"></div>
      <div class="dropzone"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.item {
  height: 100%;
}
.dropzone {
  outline: solid 1px;
  height: 50px;
}
.draggable-dropzone--occupied {
  background: lightgreen;
}

ul {
  background-color: pink;
}
.draggable--over {
  background-color: red;
  transition: all 0.3s;
}

.draggable-droppable--active {
  color: green;
}
</style>
