<script setup>
import { onMounted, onUnmounted, reactive, inject } from 'vue'
import { Sortable } from '@shopify/draggable'

const $log = inject('$log')
const items = reactive(['item1', 'item2', 'item3'])

let sortable = null

onMounted(() => {
  const announcements = {
    // draggable event
    'drag:start': (e) => $log('PluginAnnouncement drag:start', e), // 'Draggable element picked up',
    'drag:stop': (e) => $log('PluginAnnouncement drag:stop', e), // 'Draggable element dropped',
    // other
    'sortable:sorted': (e) => $log('PluginAnnouncement sortable:sorted', e), // 'Draggable elements swapped',
  }

  sortable = new Sortable(document.querySelectorAll('ul.PluginAnnouncement'), {
    draggable: 'li',
    announcements,
  })
})

onUnmounted(() => {
  sortable.destroy()
})
</script>

<template>
  <section>
    <h2>Draggable Plugin Announcement</h2>
    <p>用 option 物件的方式宣告想監聽的事件</p>
    <ul class="flex gap-2 PluginAnnouncement">
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
