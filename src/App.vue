<template>
  <div class="app__container">
    <div class="app__header">
      Header
    </div>

    <div class="app__body">
      <router-view />
    </div>

    <div class="app__footer">
      Footer
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokedexApp'
}
</script>

<style>
   .app__header {
    
  }

  .app__body {
    
  }

  .app__footer {

  }
</style>
