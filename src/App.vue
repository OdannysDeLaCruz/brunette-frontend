<template>
    <BHeader />
    <router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BHeader from '@/components/BHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    BHeader,
  },
  setup() {
    
  },
})
</script>
<style lang="scss">
</style>
