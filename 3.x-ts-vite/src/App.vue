<!--
 * @Author: yongzhen.sun
 * @Date: 2022-07-20 15:45:25
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-11-01 14:52:40
 * @Description: file content
-->
<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/watch">Watch</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts" name="App">



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
