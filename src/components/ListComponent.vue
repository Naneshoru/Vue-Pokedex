<template>
  <CardItem :item="item" v-for="item in list" :key="item.id"/>
</template>

<script>
import CardItem from './CardItem.vue'

export default {
  name: 'ListComponent',
  components: {
    CardItem
  },
  props: {
    list: Array
  }
}
</script>

<style scoped>
</style>