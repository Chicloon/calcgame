<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/game">Game</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  width: 50vw;
  margin: 0 auto;
}
/* #nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
