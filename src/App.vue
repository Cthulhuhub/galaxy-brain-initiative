<template>
<div id="app">
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
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
  background-color: rgb(228, 213, 172);
  margin: 0;
}
</style>
