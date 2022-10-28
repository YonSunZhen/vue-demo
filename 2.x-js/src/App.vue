<!--
 * @Author: yongzhen.sun
 * @Date: 2022-07-20 15:45:25
 * @LastEditors: yongzhen.sun
 * @LastEditTime: 2022-10-28 16:54:57
 * @Description: file content
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/store">Store</router-link> |
      <router-link to="/set">Set</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/computed">Computed</router-link> |
      <router-link to="/prop">Prop</router-link>
    </div>
    <router-view/>
  </div>
</template>

<!-- <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
