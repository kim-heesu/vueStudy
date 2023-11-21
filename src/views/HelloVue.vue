<template>
  <div class="hello">
    <p v-for="test in testList" :key="test">{{test.txt}}</p>
    <div v-for="list,i in listlsit" :key='i'>{{list}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloVue',
  components:{},
  data(){
    return{
      testList:[
        {test:1,txt:11111},
        {test:2,txt:2222},
        {test:3,txt:3333},
      ],
      listlsit:{1:1,2:2,3:3,4:4}
    }
  },
  methods:{
    test(){
      console.log('안녕')
    },

  },

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
