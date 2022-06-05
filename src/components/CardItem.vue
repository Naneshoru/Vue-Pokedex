<template>
  <div class="card__container">
    <div class="card__img">
      <img :src="item.path" :alt="item.name">
    </div>
    <div class="card__title">
      <p>{{ item.id }}# {{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    item: Object
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
    text-transform: capitalize;
    font-weight: bold;
  }
</style>