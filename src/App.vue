<script setup>
import { RouterView } from 'vue-router'
import LayoutHeader from '@/components/Layout/LayoutHeader.vue'
</script>

<template>
  <LayoutHeader />
  <RouterView class="container mx-auto" />
</template>
