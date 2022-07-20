<template>
    <div class="app">
        <BHeader />
        <router-view/>
    </div>
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
.container {
    padding: 0 16px;
    width: 100%;
    max-width: 1240px;
    margin: auto;
}
.container-fluid {
    padding: 0 16px;
    width: 100%;
    max-width: 100%;
}
</style>
