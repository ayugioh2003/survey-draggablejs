<script setup>
import { reactive } from 'vue'

const links = reactive([
  {
    link: 'https://shopify.github.io/draggable/',
    desc: '官方 Demo',
  },
  {
    link: 'https://github.com/Shopify/draggable#documentation',
    desc: '官方文件',
  },
  {
    link: 'https://npmtrends.com/@shopify/draggable-vs-dragula-vs-interact.js-vs-sortablejs',
    desc: '拖拉套件 google trend 比較',
  },
])
</script>

<template>
  <main>
    <h1>draggable.js Demo</h1>
    <ul>
      <li v-for="(item, index) in links" :key="index" class="mb-1">
        <span class="inline-block bg-orange-500 p-1 rounded mr-1">{{
          item.desc
        }}</span>
        <a :href="item.link">{{ item.link }}</a>
      </li>
    </ul>
  </main>
</template>
