<template>
  <div>
    <Navbar :app-name="appName" />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Navbar, Footer } from "ui"

const route = useRoute()

const appName = "Kyle Tran"

useHead({
  title: `${appName}${route.meta.title ? ` | ${route.meta.title}` : " | Home"}`,
  meta: [{ name: "description", content: "A blog by Kyle Tran" }],
});
</script>