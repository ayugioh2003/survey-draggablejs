<script setup>
import { onMounted } from 'vue'
import DraggableDefault from '@/components/demo1/draggableDefault.vue'
import PluginAnnouncement from '@/components/demo1/PluginAnnouncement.vue'
import PluginFocusable from '@/components/demo1/PluginFocusable.vue'
import PluginMirror from '@/components/demo1/PluginMirror.vue'
import PluginScrollable from '@/components/demo1/PluginScrollable.vue'

onMounted(() => {})
</script>

<template>
  <section class="flex flex-col gap-10">
    <DraggableDefault />

    <PluginAnnouncement />
    <PluginFocusable />
    <PluginMirror />
    <PluginScrollable />
  </section>
</template>
