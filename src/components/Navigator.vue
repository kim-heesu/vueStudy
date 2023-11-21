<template>
  <ul>
    <li><router-link to="/">HOME</router-link></li>
    <li><router-link to="HelloVue">안뇽</router-link></li>
    <li><router-link to="ByeVue">빠이</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'HelloVue',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
