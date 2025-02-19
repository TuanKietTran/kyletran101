<template>
  <div :class="['avatar', `avatar-${size}`]">
    <div 
      class="avatar-image" 
      :class="{ 'avatar-fallback': !src }"
      :style="{ 
        backgroundImage: src ? `url(${src})` : 'none',
        borderWidth: `${borderWidth}px`,
      }"
    >
      <slot v-if="!src" name="fallback">
        <span class="avatar-fallback-text">{{ fallbackText }}</span>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  borderWidth?: number;
}

const props = withDefaults(defineProps<AvatarProps>(), {
  src: '',
  alt: '',
  size: 'md',
  borderWidth: 0
});

const fallbackText = computed(() => {
  if (props.alt) {
    return props.alt.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
  }
  return '??'; // Default fallback if no alt text provided
});

</script>

<style scoped>
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  border-radius: 100%;
  aspect-ratio: 1 / 1;
  border-color: var(--avatar-border-color);
  border-style: solid
}

.avatar-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-fallback {
  background-color: #e2e8f0; /* Light gray as a default fallback background */
  color: #4a5568; /* Dark gray text color for contrast */
}

.avatar-fallback-text {
  font-size: 16px;
  font-weight: 600;
}

/* Size variations */
.avatar-sm {
  width: 32px;
  .avatar-fallback-text {
    font-size: 12px;
  } 
}

.avatar-md {
  width: 40px;
}

.avatar-lg {
  width: 56px;
  .avatar-fallback-text {
    font-size: 20px;
  } 
}


.avatar-xl {
  width: 120px;
  .avatar-fallback-text {
    font-size: 40px;
  } 
}
</style>