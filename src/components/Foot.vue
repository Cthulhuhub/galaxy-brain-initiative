<template>
    <div class="foot">
        <div class="foot-info">
            <span class="links"><a href="https://www.fstl1992.com/" target="_blank">Galaxy</a> <a href="https://github.com/Cthulhuhub" target="_black">Brain </a>
            <a href='https://github.com/OnionQueenMemu'>Initiative</a>
            <a href='https://www.cia.gov/library/readingroom/search/site/MK-Ultra'>&trade;</a></span>
        </div>
        <div class="foot-box">
        </div>
    </div>
</template>

<script>
export default {
    name: "Foot",
}
</script>

<style scoped>

a{
    color:white;
}

.foot{
    border-top: solid 1px black;
    font-family: arial;
    margin-top: 100px;
    box-sizing: border-box;
    background-color: black;
    color: white;
}

.foot-info {
    margin-top: 100px;
    transition: all 1s ease;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
}

.foot-box {
    transition: all 1s ease;
    margin: 0;
    opacity: 0;
    width: 100%;
    height: 500px;
    overflow-x: hidden;
}

.foot-box:hover {
    transition: all 5s ease;
    opacity: 100;
    background-image: url('../assets/images/foot.jpg');
    background-position: 0% 30%;
}

.links {
    z-index: 20;
    text-align: center;
    transition: all 2s ease;
}

.links:hover {
    transition: all 2s ease;
    transform: scale(2, 2);
}
</style>