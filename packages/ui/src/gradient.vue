<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    small?: boolean;
    conic?: boolean;
    class?: string;
  }>(),
  {},
);
</script>

<template>
  <span
    :class="
      [
        'gradient',
        conic ? 'glowConic' : undefined,
        small ? 'gradientSmall' : 'gradientLarge',
        props.class,
      ]
        .filter(Boolean)
        .join(' ')
    "
  />
</template>

<style scoped>


/* Gradients */
.gradient {
  position: absolute;
  mix-blend-mode: normal;
  will-change: filter;
  padding: 0;
  margin: 0;
}

.gradientSmall {
  filter: blur(32px);
}

.gradientLarge {
  filter: blur(75px);
}

.glowConic {
  background-image: var(--glow-conic);
}



</style>