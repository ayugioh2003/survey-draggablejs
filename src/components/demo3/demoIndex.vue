<script setup>
import { onMounted } from 'vue'
import PluginCollidable from './PluginCollidable.vue'
import PluginResizeMirror from './PluginResizeMirror.vue'
import PluginSnappable from './PluginSnappable.vue'
import PluginSwapAnimation from './PluginSwapAnimation.vue'
import PluginSortAnamation from './PluginSortAnamation.vue'

onMounted(() => {})
</script>

<template>
  <section class="mb-20">
    <!-- <h2>Demo3Index</h2> -->

    <PluginCollidable />
    <PluginResizeMirror />
    <PluginSnappable />
    <PluginSwapAnimation />
    <PluginSortAnamation />
  </section>
</template>
