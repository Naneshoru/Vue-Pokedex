<template>
  <div class="list-container">
    <div class="list__header">
      List Header
    </div>

    <div class="list__body">
      <CardItem :pokemon="pokemon" v-for="pokemon in pokemons" :key="pokemon.id"/>
    </div>

    <div class="list__footer">
      List Footer
    </div>
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
  .list-container {
    display: flex;
    flex-direction: column;
  }

  .list__header {
    
  }

  .list__body {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .list__footer {

  }
</style>