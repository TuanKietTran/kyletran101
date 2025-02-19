<script setup lang="ts">

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

:root {
  --max-width: 1100px;
  --border-radius: 12px;
  --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

  /* Default (light mode) */
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;

  --callout-rgb: 238, 240, 241;
  --callout-border-rgb: 172, 175, 176;
  --card-rgb: 180, 185, 188;
  --card-border-rgb: 131, 134, 135;

  /* Dark Mode */
  --dark-foreground-rgb: 255, 255, 255;
  --dark-background-start-rgb: 0, 0, 0;
  --dark-background-end-rgb: 0, 0, 0;

  --dark-callout-rgb: 20, 20, 20;
  --dark-callout-border-rgb: 108, 108, 108;
  --dark-card-rgb: 100, 100, 100;
  --dark-card-border-rgb: 200, 200, 200;

  --glow-conic: conic-gradient(
    from 180deg at 50% 50%,
    #2a8af6 0deg,
    #a853ba 180deg,
    #e92a67 360deg
  );

  --button-bg-default: rgb(var(--card-rgb));
  --button-color-default: rgb(var(--foreground-rgb));
  --button-border-default: rgb(var(--card-border-rgb));

  --button-bg-primary: #007bff;
  --button-color-primary: rgb(var(--dark-foreground-rgb));
  --button-border-primary: transparent;

  --button-bg-secondary: rgb(var(--card-rgb));
  --button-color-secondary: rgb(var(--foreground-rgb));
  --button-border-secondary: rgb(var(--card-border-rgb));

  --button-bg-danger: #dc3545;
  --button-color-danger: rgb(var(--dark-foreground-rgb));
  --button-border-danger: transparent;

  --button-bg-outline: transparent;
  --button-color-outline: rgb(var(--foreground-rgb));
  --button-border-outline: rgb(var(--foreground-rgb));

  --button-bg-disabled: rgb(var(--callout-rgb));
  --button-color-disabled: rgb(var(--callout-border-rgb));
  --button-border-disabled: transparent;

  --avatar-border-color: rgb(var(--foreground-rgb));
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: var(--dark-foreground-rgb);
    --background-start-rgb: var(--dark-background-start-rgb);
    --background-end-rgb: var(--dark-background-end-rgb);
    --callout-rgb: var(--dark-callout-rgb);
    --callout-border-rgb: var(--dark-callout-border-rgb);
    --card-rgb: var(--dark-card-rgb);
    --card-border-rgb: var(--dark-card-border-rgb);
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: "Inter", sans-serif;
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}

a {
  color: inherit;
  text-decoration: none;
}






</style>