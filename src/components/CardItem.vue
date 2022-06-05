<template>
  <div class="card__container">
    <div class="card__img">
      <img :src="pokemon.path" :alt="pokemon.name">
    </div>
    <div class="card__title">
      <p>{{ pokemon.id }}# : {{ pokemon.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    pokemon: Object
  }
}
</script>

<style scoped>
  .card__container {
    display: flex;
    flex-direction: column;
  }

  .card__img {

  }

  .card__title {
    
  }
</style>