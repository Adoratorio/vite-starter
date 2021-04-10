<template>
  <div class="app">
    <RouterLink to="/">
      <span>Home</span>
    </RouterLink>
    <RouterLink to="/about">
      <span>About</span>
    </RouterLink>

    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>

</style>