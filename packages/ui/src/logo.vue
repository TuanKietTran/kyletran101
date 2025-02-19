<template>
  <img
    alt="Logo"
    height="150"
    aspect-ratio="1:1"
    src="./assets/kyletran.png"
    :class="`logo-${size}`"
  />
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: "md",
    validator: (value: string) => ["sm", "md", "lg", "xl"].includes(value),
  },
})

</script>

<style scoped>
img {
  transition: filter 0.3s ease-in-out;
}

/* For manual toggle */

@media (prefers-color-scheme: dark) {
  img {
    filter: invert(1) hue-rotate(180deg);
  }
}

/* Size variations */
.logo-sm {
  height: 32px;
}

.logo-md {
  height: 40px;
}

.logo-lg {
  height: 56px;
}

.logo-xl {
  height: 120px;
}
</style>
