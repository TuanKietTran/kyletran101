<template>
  <button 
    :class="buttonClass"
    :disabled="disabled"
    @click="handleClick"
  >
    <div v-if="loading" class="loading-spinner"></div>
    <span class="btn-content"><slot /></span>
    <span class="ripple" :style="rippleStyle" v-if="showRipple"></span>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value: string) => ['default', 'primary', 'secondary', 'danger', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

const showRipple = ref(false);
const rippleStyle = ref({});

const buttonClass = computed(() => {
  const classes = ['btn'];

  switch (props.variant) {
    case 'primary':
      classes.push('btn-primary');
      break;
    case 'secondary':
      classes.push('btn-secondary');
      break;
    case 'danger':
      classes.push('btn-danger');
      break;
    case 'outline':
      classes.push('btn-outline');
      break;
    default:
      classes.push('btn-default');
  }

  switch (props.size) {
    case 'sm':
      classes.push('btn-sm');
      break;
    case 'lg':
      classes.push('btn-lg');
      break;
  }

  if (props.disabled) {
    classes.push('btn-disabled');
  }

  return classes.join(' ');
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
    createRipple(event);
  }
};

// Function to create ripple effect
const createRipple = (event: { currentTarget: any; clientY: number; clientX: number; }) => {
  const button = event.currentTarget;
  const buttonRect = button.getBoundingClientRect();
  const diameter = Math.max(buttonRect.width, buttonRect.height);
  const radius = diameter / 2;

  showRipple.value = true;
  rippleStyle.value = {
    width: `${diameter}px`,
    height: `${diameter}px`,
    top: `${event.clientY - buttonRect.top - radius}px`,
    left: `${event.clientX - buttonRect.left - radius}px`
  };

  setTimeout(() => {
    showRipple.value = false;
  }, 600); // Duration of animation plus a bit extra to ensure it's completed
};
</script>

<style scoped>
.btn {
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  display: inline-flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  position: relative;
  overflow: hidden;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  animation: ripple 600ms ease-out;
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.btn-default {
  background-color: var(--button-bg-default);
  color: var(--button-color-default);
  border-color: var(--button-border-default);
}

.btn-primary {
  background-color: var(--button-bg-primary);
  color: var(--button-color-primary);
  border-color: var(--button-border-primary);
}

.btn-secondary {
  background-color: var(--button-bg-secondary);
  color: var(--button-color-secondary);
  border-color: var(--button-border-secondary);
}

.btn-danger {
  background-color: var(--button-bg-danger);
  color: var(--button-color-danger);
  border-color: var(--button-border-danger);
}

.btn-outline {
  background-color: var(--button-bg-outline);
  color: var(--button-color-outline);
  border-color: var(--button-border-outline);
}

.btn-sm {
  font-size: 14px;
  padding: 8px 12px;
}

.btn-lg {
  font-size: 18px;
  padding: 12px 16px;
}

.btn:hover:not(.btn-disabled) {
  opacity: 0.8;
}

.btn-disabled {
  background-color: var(--button-bg-disabled);
  color: var(--button-color-disabled);
  border-color: var(--button-border-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}

.loading-spinner {
  border: 3px solid var(--button-border-outline);
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<!-- <style scoped>
.btn {
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-default {
  background-color: #f0f0f0;
  color: #333;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-sm {
  font-size: 14px;
  padding: 8px 16px;
}

.btn-lg {
  font-size: 18px;
  padding: 12px 24px;
}

.btn:hover:not(.btn-disabled) {
  opacity: 0.8;
}

.btn-disabled {
  background-color: #e9ecef;
  color: #6c757d;
  cursor: not-allowed;
  opacity: 0.6;
}

.loading-spinner {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> -->