<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Sortable, Plugins } from '@shopify/draggable'

const $log = inject('$log')

const items = reactive(['item1', 'item2', 'item3', 'item4', 'item5'])
const items2 = reactive(['item6', 'item7', 'item8', 'item9', 'item10'])

let sortable = null

onMounted(() => {
  sortable = new Sortable(document.querySelectorAll('ul.PluginResizeMirror'), {
    draggable: 'li', // containers 中想拖曳的元素
    plugins: [Plugins.ResizeMirror],

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
    <h2>Plugin ResizeMirror</h2>
    <p>Mirror 尺寸變化</p>
    <ul class="PluginResizeMirror py-2">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="cursor-pointer p-1"
      >
        {{ item }}
      </li>
    </ul>

    <ul class="PluginResizeMirror py-2 mt-4">
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

.PluginResizeMirror {
  display: grid;
  gap: 1rem;
  grid-template-columns: 200px 200px 1fr;
  padding: 1rem;
}
</style>
