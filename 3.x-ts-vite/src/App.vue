<!--
 * @Author: yongzhen.sun
 * @Date: 2022-07-20 15:45:25
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2023-04-05 16:54:05
 * @Description: file content
-->
<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/watch">Watch</router-link> |
    <router-link to="/rxjs">Rxjs</router-link> |
    <router-link to="/tsx">Tsx</router-link> |
    <router-link to="/echart">Echart</router-link> |
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
