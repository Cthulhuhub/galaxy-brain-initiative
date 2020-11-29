<template>
    <div class="ani-wrapper">
        <div class="loading-ani">
            <div class="div-1 ball left"></div>
            <div class="div-2 ball right"></div>
            <div class="div-3 ball left"></div>
            <div class="div-4 ball right"></div>
            <div class="div-5 ball left"></div>
            <div class="div-6 ball right"></div>
            <div class="div-7 ball left"></div>
            <div class="div-8 ball right"></div>
            <div class="div-9 ball left"></div>
            <div class="div-10 ball right"></div>
            <div class="div-11 ball left"></div>
            <div class="div-12 ball right"></div>
            <div class="div-13 ball left"></div>
            <div class="div-14 ball right"></div>
            <div class="div-15 ball left"></div>
            <div class="div-16 ball right"></div>
            <div class="div-17 ball left"></div>
            <div class="div-18 ball right"></div>
            <div class="div-19 ball left"></div>
            <div class="div-20 ball right"></div>
            <div class="div-1 ball left"></div>
            <div class="div-2 ball right"></div>
            <div class="div-3 ball left"></div>
            <div class="div-4 ball right"></div>
            <div class="div-5 ball left"></div>
            <div class="div-6 ball right"></div>
            <div class="div-7 ball left"></div>
            <div class="div-8 ball right"></div>
            <div class="div-9 ball left"></div>
            <div class="div-10 ball right"></div>
            <div class="div-11 ball left"></div>
            <div class="div-12 ball right"></div>
            <div class="div-13 ball left"></div>
            <div class="div-14 ball right"></div>
            <div class="div-15 ball left"></div>
            <div class="div-16 ball right"></div>
            <div class="div-17 ball left"></div>
            <div class="div-18 ball right"></div>
            <div class="div-19 ball left"></div>
            <div class="div-20 ball right"></div>
        </div>
    </div>
</template>

<script>
import anime from "animejs";
import { onMounted } from "vue";
export default {
    name: "Loading",
    setup() {
        onMounted(() => {
            anime({
                targets: ".ball",
                keyframes: [
                    {
                        translateY: anime.stagger(100, {grid: [10, 4], from: 'center', axis: 'y'}),
                        backgroundColor: ["hsl(0, 75%, 0%)", "hsl(272, 50%, 35%)"],
                    },
                    {
                        translateX: anime.stagger(100, {grid: [10, 4], from: 'center', axis: 'x'}),
                    },
                    {
                        translateY: 0,
                    },
                    {
                        translateX: 0,
                        backgroundColor: ["hsl(272, 50%, 35%)", "hsl(0, 75%, 0%)"],
                    }
                ],
                duration: 5000,
                easing: 'spring(1, 100, 10, 0)',
                delay: anime.stagger(100, { grid: [10, 4], from: 'center'}),
            });
        });
    },
};
</script>

<style scoped>
.ani-wrapper {
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-ani {
    width: 300px;
    height: 120px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-auto-rows: repeat(4, 1fr);
}

.ball {
    background-color: black;
    width: 20px;
    height: 20px;
    border-radius: 25%;
    }
</style>