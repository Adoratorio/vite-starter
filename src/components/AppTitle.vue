<template>
  <div class="c-app-title title">
    <h1 v-html="content"></h1>
  </div>
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
