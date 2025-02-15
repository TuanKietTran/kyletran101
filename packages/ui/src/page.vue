<script setup lang="ts">
import Gradient from "./gradient.vue";

</script>

<template>
  <main class="main">
    <div class="logoGradientContainer">
      <Gradient class="logoGradient" :conic="true" :small="true" />
    </div>
    <slot />
    <Gradient class="backgroundGradient" conic />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
}

.logoGradientContainer {
  display: flex;
  position: absolute;
  z-index: 50;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 16rem;
}

.logoGradient {
  opacity: 0.9;
  width: 120px;
  height: 120px;
}

.backgroundGradient {
  top: -500px;
  width: 1000px;
  height: 1000px;
  opacity: 0.15;
}


@media (prefers-reduced-motion) {
  .card:hover span {
    transform: none;
  }
}

/* Mobile */
@media (max-width: 700px) {

  .grid {
    grid-template-columns: 1fr;
    margin-bottom: 120px;
    max-width: 320px;
    text-align: center;
  }
}

/* Enable hover only on non-touch devices */
@media (hover: hover) and (pointer: fine) {
  .card:hover {
    background: rgba(var(--card-rgb), 0.1);
    border: 1px solid rgba(var(--card-border-rgb), 0.15);
  }

  .card:hover span {
    transform: translateX(4px);
  }
}


</style>
