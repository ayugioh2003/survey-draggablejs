<script setup>
import { onMounted } from 'vue'
import PluginCollidable from './PluginCollidable.vue'
import PluginResizeMirror from './PluginResizeMirror.vue'
import PluginSnappable from './PluginSnappable.vue'
import PluginSwapAnimation from './PluginSwapAnimation.vue'

onMounted(() => {})
</script>

<template>
  <section>
    <h2>Demo3Index</h2>

    <PluginCollidable />
    <PluginResizeMirror />
    <PluginSnappable />
    <PluginSwapAnimation />
  </section>
</template>
