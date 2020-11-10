<template>
  <div id="card-root">
    <Card v-for="(card, index) in cards" :key="index" :card="card"/>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import data from './assets/data.json'

export default {
  name: 'App',
  computed: {
    cards() {
      return data;
    }
  },
  components: {
    Card
  }
}
</script>

<style>
*, html, body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body {
    background-color: #f3f3f3;
}

#card-root {
    padding-top: 50px;
}
</style>
