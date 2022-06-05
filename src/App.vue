<template>
  <ListComponent :pokemons="pokemons" />
</template>

<script>
import ListComponent from './components/ListComponent.vue'
import axios from 'axios';

export default {
  name: 'PokedexApp',
  components: {
    ListComponent
  },
  data() {
    return {
      pokemons: []
    }
  },
  methods: {
    async getPokemons() {
      axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
        const { data } = res;
        this.pokemons = data.results;

        this.setPokeNumbers();
      })
    },

    setPokeNumbers() {
      this.pokemons.forEach((pokemon) => {
        pokemon.id = pokemon.url.split('/')[6];
      });
    }
  },
  mounted() {
    this.getPokemons();
  }
}
</script>

<style>
  
</style>
