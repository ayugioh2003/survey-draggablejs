<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Sortable, Plugins } from '@shopify/draggable'

const $log = inject('$log')

const arr = [...Array(15)].map((v, i) => `item${i + 1}`)
const items = reactive(arr)

let sortable = null

onMounted(() => {
  sortable = new Sortable(document.querySelectorAll('ul.PluginSwapAnimation'), {
    draggable: 'li', // containers 中想拖曳的元素

    // 拖過元素時，想添加的 className
    classes: {
      'draggable:over': ['draggable--over'],
    },

    swapAnimation: {
      duration: 1000,
      easingFunction: 'ease-out-in',
      horizontal: false,
    },
    plugins: [Plugins.SwapAnimation], // Or [SwapAnimation]
  })

  // sortable.on('drag:start', () => console.log('drag:start'))
  // sortable.on('drag:move', () => console.log('drag:move'))
  // sortable.on('drag:stop', () => console.log('drag:stop'))
  // sortable.on('drag:over:container', (e) => $log('drag:over:container', e))

  sortable.on('snap:in', (e) => $log('snap:in', e))
  sortable.on('snap:out', (e) => $log('snap:out', e))

  console.log('sortable', sortable)
})

onUnmounted(() => {
  sortable.destroy()
})
</script>

<template>
  <section>
    <h2>Plugin PluginSwapAnimation</h2>
    <p>非預設。交換時有動畫（看不出來，只有抖動而已）。目前只支援 sortable</p>
    <ul class="PluginSwapAnimation py-2">
      <li v-for="item in items" :key="item" class="cursor-pointer p-1">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
ul {
  background-color: pink;
}
li {
  background-color: orange;
  transition: all 0.3s;
}

.draggable--over {
  background-color: red;
  transition: width height 1s;
}
.draggable-mirror {
  background-color: gray;
}

.PluginSwapAnimation {
  display: grid;
  gap: 1rem;
  grid-template-columns: 200px 200px 1fr;
  padding: 1rem;
}
</style>
