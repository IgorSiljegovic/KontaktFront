<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/kontakt">
        Dodaj kontakt
      </router-link>
      <router-link to="/kontakti">
        Kontakti
      </router-link>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  background: #2c3e50;
  padding: 1rem;
  font-size: 1.5rem;
  border-bottom: 1px solid white;
}
</style>
