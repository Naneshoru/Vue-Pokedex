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

<style scoped>
  .list-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
</style>