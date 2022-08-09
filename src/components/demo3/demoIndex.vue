<script setup>
import { onMounted } from 'vue'
import PluginCollidable from './PluginCollidable.vue'
import PluginResizeMirror from './PluginResizeMirror.vue'

onMounted(() => {})
</script>

<template>
  <section>
    <h2>Demo3Index</h2>

    <PluginCollidable />
    <PluginResizeMirror />
  </section>
</template>
