<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: "black",
    },
    bg: {
      type: String,
      default: 'white'
    },
    border: {
      type: String,
      default: 'none'
    },
    padding: {
      type: String,
      default: '0 17px'
    },
    size: {
      type: String,
      default: 'medium'
    }
})
</script>

<template>
<button :class="['button', `button--${size}`]"> 
    <slot />
</button>
</template>

<style lang="scss" scoped>
.button {
  border-radius: 5px;
  border: v-bind(border);
  background: v-bind(bg);
  color: v-bind(color);
}
.button:hover {
  cursor: pointer;
}
// Size
.button--small {
  padding: 16px 16px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
}
.button--medium {
  padding: 16px 20px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
}
.button--large {
  padding: 16px 30px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
}
</style>
