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
        console.log(res)
        const { data } = res;
        console.log(data)
        this.pokemons = data.results;
      })
    }
  },
  mounted() {
    this.getPokemons();
  }
}
</script>

<style>
  
</style>
