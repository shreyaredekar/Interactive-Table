<template>
  <div class="container">
    <!-- <HeaderBar /> -->
    <h1>Hello Foodie, Welcome to the Food Court</h1>
    
    <!-- Form -->
    <form class="add" @submit.prevent="addFood">
      <input type="text" name="name" placeholder="Name" v-model="newFood.name" />
      <input type="text" name="category" placeholder="Category" v-model="newFood.category"/>
      <input type="text" name="price" placeholder="Price" v-model="newFood.price"/>
      <button type="submit">Add Item</button>
    </form>
    
    <!-- Table -->
    <table border="1" class="food-table">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
      <tr v-for="(item) in food" :key="item.id">
        <td>{{ item.id }}</td>
        <td>
          <span v-if="!item.editing" @click="editItem(item)">{{ item.name }}</span>
          <input v-else type="text" v-model="item.name" @blur="saveEdit(item)" />
        </td>
        <td>
          <span v-if="!item.editing" @click="editItem(item)">{{ item.category }}</span>
          <input v-else type="text" v-model="item.category" @blur="saveEdit(item)" />
        </td>
        <td>
          <span v-if="!item.editing" @click="editItem(item)">{{ item.price }}</span>
          <input v-else type="text" v-model="item.price" @blur="saveEdit(item)" />
        </td>
        <td>
          <button @click="editItem(item)">Edit</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      food: [],
      newFood: {
        name: '',
        category: '',
        price: ''
      }
    }
  },
  async mounted() {
    await this.fetchFood();
  },
  methods: {
    async fetchFood() {
      try {
        const response = await axios.get("http://localhost:3000/food");
        this.food = response.data.map(item => ({ ...item, editing: false }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async addFood() {
      try {
        const response = await axios.post("http://localhost:3000/food", this.newFood);
        this.food.push({ ...response.data, editing: false });
        this.newFood = { name: '', category: '', price: '' }; 
      } catch (error) {
        console.error("Error adding food item:", error);
      }
    },
    editItem(item) {
      item.editing = true;
    },
    saveEdit(item) {
      item.editing = false;
      axios.put(`http://localhost:3000/food/${item.id}`, item)
        .then(() => console.log("Item updated successfully"))
        .catch(error => console.error("Error updating item:", error));
    },
    deleteItem(id) {
      axios.delete(`http://localhost:3000/food/${id}`)
        .then(() => {
          this.food = this.food.filter(item => item.id !== id);
          console.log("Item deleted successfully");
        })
        .catch(error => console.error("Error deleting item:", error));
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  place-items: center; 
  height: 80vh;
  
}

.add {
  margin-bottom: 20px; 
}

.add input {
  display: inline-block; 
  width: 200px; 
  margin-right: 10px; 
}

.add button {
  display: block; 
  width: 200px; 
  margin-left: 245px;
}

.food-table {
  margin-top: 20px; 
}

.food-table tr:hover {
  background-color: #f5f5f5;
}

.food-table tr td {
  padding: 10px;
  width: 100px;
  height: 30px;
  cursor: pointer; 
}

.food-table tr td input[type="text"] {
  width: 100%; 
}
</style>
