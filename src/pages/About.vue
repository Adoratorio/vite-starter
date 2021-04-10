<template>
  <div class="view about">
    <AppTitle :content="'About'" />
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue';

export default {
  name: 'About',
  
  components: {
    AppTitle,
  },
};
</script>

<style lang="scss" scoped>

</style>