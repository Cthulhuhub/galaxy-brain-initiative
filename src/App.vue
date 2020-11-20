<template>
<div id="app">
  <nav>
    <NavBar :name="$route.name"/>
  </nav>
  <main>
    <router-view/>
  </main>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Xanh+Mono&display=swap');
a {
  text-decoration: none;
  color: white;
}

body {
  font-family: 'Xanh Mono', monospace;
  font-size: 30px;
  background-color: rgb(246, 237, 250);
  margin: 0;
}
</style>
