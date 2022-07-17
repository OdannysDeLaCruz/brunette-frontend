<template>
  <div class="home">
      <BCarouselCategories />
      <h1>Home</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BHeader from '@/components/BHeader.vue'
import BCarouselCategories from '@/components/BCarouselCategories.vue'

export default defineComponent({
  name: 'Home',
  components: {
    BHeader,
    BCarouselCategories
  },
});
</script>
