<template>
  List component
  <div class="list-container">
    <ListComponent :list="pokemons" />
  </div>
  List component Fim
</template>

<script>
import axios from 'axios';
import ListComponent from '../components/ListComponent.vue'
import { makeTreeDigit } from '../utils/formatters'

export default {
  name: 'ListPage',
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
      axios.get('https://pokeapi.co/api/v2/pokemon').then((pokemons) => {
        const { data } = pokemons;
        this.pokemons = data.results;

        this.setPokeNumbers();

        this.getPokeImages();
      })
    },

    setPokeNumbers() {
      this.pokemons.forEach((pokemon) => {
        pokemon.id = pokemon.url.split('/')[6];
      });
    },

    getPokeImages() {
      this.pokemons.forEach((pokemon) => {
        this.pokemons[pokemon.id - 1].path = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${makeTreeDigit(pokemon.id)}.png`;
      });
    }
  },
  mounted() {
    this.getPokemons();
  }
}
</script>

<style scoped>
  .list-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
</style>