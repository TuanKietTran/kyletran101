<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Btn from "./btn.vue";

const props = defineProps<{
  appName: string;
}>();

const isClickToDark = ref(false);
</script>

<template>
  <header>
    <h1>
      <a href="/">{{ props.appName }}</a>
    </h1>
    <div class="actions">
      <Btn
        variant="outline"
        size="sm"
        aria-label="Toggle navigation"
        @click="isClickToDark = !isClickToDark"
      >
        <Icon
          :icon="
            isClickToDark
              ? 'line-md:moon-twotone-loop'
              : 'line-md:sunny-outline-loop'
          "
          style="font-size: 24px"
        />
      </Btn>
      <Btn variant="outline" size="sm" aria-label="Toggle navigation">
        <Icon icon="fa6-solid:bars" style="font-size: 24px" />
      </Btn>
    </div>
    <nav style="display: none"></nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  z-index: 2;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
  background: linear-gradient(
    to bottom,
    rgba(var(--background-start-rgb), 1),
    rgba(var(--callout-rgb), 0.5)
  );
  background-clip: padding-box;
  backdrop-filter: blur(24px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
