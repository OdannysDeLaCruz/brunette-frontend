<template>
  <button 
    :style="cssProps"
    class="button" 
    :class='[`button--${ mode }`, border ? "button--border" : ""]' > 
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { computed } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: "BButton",
    props: {
        color: {
            type: String,
            default: "white",
        },
        mode: {
          type: String,
          default: 'white'
        },
        border: {
          type: String,
          default: ''
        }
    },
    setup( props ) {
        const cssProps = computed( () => {
          return {
            '--border': props.border
          }
        })

        return {
          cssProps
        }
    },
})
</script>
<style lang="scss" scoped>
.button {
  padding: 0 17px;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  min-height: 30px;
}

.button--orange {
  background: #ffcc00;
  border: 1px solid #ffcc00;
  color: #ffffff;
}

.button--white {
  background: #ffffff;
  border: 1px solid #000000;
  color: #000000;
}

// Border
.button--border {
  border: var(--border);
}
</style>
