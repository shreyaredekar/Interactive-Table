<template>
  <HeaderBar />
  <h1>Hello User, Welcome to AddItem Page</h1>
  <form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="food.name" />
    <input type="text" name="category" placeholder="Enter Category" v-model="food.category"/>
    <input type="text" name="price" placeholder="Enter Price" v-model="food.price"/>
    <button type="button" v-on:click="addFood">Add New Item</button>
  </form>
</template>

<script>
import HeaderBar from './HeaderBar.vue'
import axios from 'axios';
export default {
  name:'AddItem',
  components:{
    HeaderBar
  },
  data(){
    return{
      food :{
        name:'',
        category:'',
        price:''
      }
    }
  },
  methods:{
    async addFood(){
      console.warn(this.food)
      const result = await axios.post("http://localhost:3000/food",{
        name:this.food.name,
        category:this.food.category,
        price:this.food.price,
      });
      console.warn("result",result)
    }
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
