<template>
  <img
    alt="Logo"
    height="35"
    aspect-ratio="1:1"
    src="./assets/kyletran.png"
  />
</template>

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
</style>
