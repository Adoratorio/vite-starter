<template>
  <main class="app__root">
    <nav class="navigator">
      <RouterLink to="/">
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/about">
        <span>About</span>
      </RouterLink>
    </nav>

    <RouterView />
  </main>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>

</style>