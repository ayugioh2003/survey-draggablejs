<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Sortable, Plugins } from '@shopify/draggable'

const $log = inject('$log')

const arr = [...Array(15)].map((v, i) => `item${i + 1}`)
const items = reactive(arr)

let sortable = null

onMounted(() => {
  sortable = new Sortable(document.querySelectorAll('ul.PluginSortAnimation'), {
    draggable: 'li', // containers 中想拖曳的元素

    // 拖過元素時，想添加的 className
    classes: {
      'draggable:over': ['draggable--over'],
    },

    sortAnimation: {
      duration: 200,
      easingFunction: 'ease-in-out',
    },
    plugins: [Plugins.SortAnimation], // Or [SortAnimation]
  })

  // sortable.on('drag:start', () => console.log('drag:start'))
  // sortable.on('drag:move', () => console.log('drag:move'))
  // sortable.on('drag:stop', () => console.log('drag:stop'))
  // sortable.on('drag:over:container', (e) => $log('drag:over:container', e))

  // console.log('sortable', sortable)
})

onUnmounted(() => {
  sortable.destroy()
})
</script>

<template>
  <section>
    <h2>Plugin PluginSortAnimation</h2>
    <p>
      非預設。交換時有動畫（看不出來，只有抖動而已）。目前只支援
      sortable。支援垂直與水平 grid layout
    </p>
    <ul class="PluginSortAnimation py-2">
      <li
        v-for="(item, index) in items"
        :key="`snap${item}`"
        class="cursor-pointer p-1 bg-orange-500"
        :class="{
          'bg-gray-500': index % 3 === 0,
        }"
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
li {
  // background-color: orange;
  transition: all 0.3s;
}

.draggable--over {
  background-color: red;
  transition: width height 1s;
}
.draggable-mirror {
  background-color: gray;
}

.PluginSortAnimation {
  display: grid;
  gap: 1rem;
  grid-template-columns: 200px 200px 1fr;
  padding: 1rem;
}
</style>
