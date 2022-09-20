<script lang="ts" setup>
import { computed, defineProps } from 'vue'

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
    }
})
</script>

<template>
    <button
        class="button"
      > 
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.button {
  padding: v-bind(padding);
  border-radius: 5px;
  border: v-bind(border);
  font-weight: 600;
  min-height: 30px;
  background: v-bind(bg);
  color: v-bind(color);
}
.button:hover {
  cursor: pointer;
}
// .button--orange {
//   background: #ffcc00;
//   border: 1px solid #ffcc00;
//   color: #ffffff;
// }

// .button--white {
//   background: #ffffff;
//   border: 1px solid #000000;
//   color: #000000;
// }

// // Border
// .button--border {
//   border: var(--border);
// }
</style>
