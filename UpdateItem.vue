<template>
  <HeaderBar />
  <h1>Hello User, Welcome to UpdateItem Page</h1>
</template>

<script>
import HeaderBar from './HeaderBar.vue'
export default {
  name:'UpdateItem',
  components:{
    HeaderBar
  }
}
</script>

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
