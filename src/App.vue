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
<template>
    <div class="app">
        <BHeader />
        <router-view/>
    </div>
</template>
<style lang="scss"></style>
