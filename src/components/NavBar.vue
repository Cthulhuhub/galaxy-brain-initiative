<template>
    <div class="nav-bar">
        <div><router-link :to="{ name: 'Home' }">Experience Synergy</router-link></div>
        <div><router-link :to="{ name: 'Exercises' }">Actualize Direction</router-link></div>
        <div>Innovate Innovation</div>
        <a href="https://en.wikipedia.org/wiki/Bread" target="_blank">learn about bread</a>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap');
.nav-bar{
    font-family: 'Montserrat Subrayada', sans-serif;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: rgb(72, 135, 207);
    box-shadow: 4px 4px 4px 4px rgba(88, 88, 88, 0.116);
    color:white;
}
</style>