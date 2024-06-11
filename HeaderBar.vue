<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add</router-link>
        <router-link to="/update">Update</router-link>
    </div>
</template>

<script>
export default{
    name: 'HeaderBar'
}
</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;
    
}
.nav a{
    float: left;
    color:antiquewhite;
    padding: 14px 14px;
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>