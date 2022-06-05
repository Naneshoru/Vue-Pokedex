<template>
  <div class="list__header">
    List Header
  </div>

  <div class="list__body" v-for="pokemon in pokemons" :key="pokemon.id">
    <CardItem :pokemon="pokemon"/>
  </div>

  <div class="list__footer">
    List Footer
  </div>
</template>

<script>
import CardItem from './CardItem.vue'

export default {
  name: 'ListComponent',
  components: {
    CardItem
  },
  props: {
    pokemons: Array
  }
}
</script>

<style scoped>
  
</style>