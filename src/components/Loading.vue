<template>
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
  </div>
</template>

<script>
import anime from "animejs";
import { onMounted } from "vue";
export default {
  name: "Loading",
  setup() {
    onMounted(() => {
        let balls = document.querySelectorAll('.ball')

        balls.forEach((ball, i) => {
            anime({
                targets: `.div-${i + 1}`,
                keyframes: [
                    {translateY: -40 * (i % 2 === 0 ? -1 : 1)},
                    {translateX: 400 * (i % 2 === 0 ? -1 : 1)},
                    {translateY: 40 * (i % 2 === 0 ? -1 : 1)},
                    {translateX: 0},
                    {translateY: 0},
                ],
                duration: 2500,
                easing: 'easeOutElastic(1.5, .8)',
                delay: i * 250
            })
        })
    });
  },
};
</script>

<style scoped>
.loading-ani {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ball {
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>