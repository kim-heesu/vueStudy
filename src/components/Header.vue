<template>
  <header>
    <h1><router-link to="/">난 로고</router-link></h1>
    <Nav />
  </header>
</template>

<script>
import Nav from '@/components/Navigator.vue';
export default {
  name: 'Header',
  components: {
    Nav,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
