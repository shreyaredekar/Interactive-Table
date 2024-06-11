<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body{
  padding:0;
  margin:0;
  /* background-image: url('https://wallpapers.com/images/hd/aesthetic-food-pictures-2camcwptr2pxhqtn.jpg');
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat;  */
}

.add input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid rgb(16, 17, 17);
  border-radius: 10px;
}

.add button{
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  border-radius: 10px;
  background: skyblue;
  color: #1d1616;
  cursor: pointer;
}

.add button:hover{
    background: #ddd;
    color: #333;
}
</style>
