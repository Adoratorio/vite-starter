<template>
  <div class="c-app-title title" v-html="content"></div>
</template>

<script>
export default {
  name: 'AppTitle',

  props: {
    content: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
