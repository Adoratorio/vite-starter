<template>
  <div class="view home">
    <AppTitle :content="'Home'" />
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle.vue';

export default {
  name: 'Home',

  components: {
    AppTitle,
  },
};
</script>

<style lang="scss" scoped>

</style>
