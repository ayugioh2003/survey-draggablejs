<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Sortable, Plugins } from '@shopify/draggable'

const $log = inject('$log')

const items = reactive(['item1', 'item2', 'item3', 'item4', 'item5'])

let sortable = null

onMounted(() => {
  sortable = new Sortable(document.querySelectorAll('ul.PluginSnappable'), {
    draggable: 'li', // containers 中想拖曳的元素
    plugins: [Plugins.Snappable],

    // 拖過元素時，想添加的 className
    classes: {
      'draggable:over': ['draggable--over'],
    },
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
    <h2>Plugin Snappable</h2>
    <p>Mirror 快速移動到可放置區域</p>
    <ul class="PluginSnappable py-2">
      <li
        v-for="(item, index) in items"
        :key="`snap${item}`"
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

.PluginSnappable {
  display: grid;
  gap: 1rem;
  grid-template-columns: 200px 200px 1fr;
  padding: 1rem;
}
</style>
