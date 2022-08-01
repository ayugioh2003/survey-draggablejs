<script setup>
import { RouterLink, useRouter } from 'vue-router'
</script>

<template>
  <header class="bg-green-500 py-2">
    <div class="container mx-auto">
      <nav class="flex gap-2">
        <template v-for="route in useRouter().options.routes" :key="route.name">
          <RouterLink :to="route.path" class="capitalize text-white">{{
            route.name
          }}</RouterLink>
        </template>
      </nav>
    </div>
  </header>
</template>
