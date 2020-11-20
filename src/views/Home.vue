<template>
    <div class="home-body">
        <div class="slider-box">
        <transition name="slide">
            <div v-if="state.currentSlide === 0" class="slider-div first-img"></div>
            <div v-else-if="state.currentSlide === 1" class="slider-div second-img"></div>
            <div v-else-if="state.currentSlide === 2" class="slider-div third-img"></div>
            <div v-else-if="state.currentSlide === 3" class="slider-div fourth-img"></div>
        </transition>
        </div>
        <h1>Home</h1>
    </div>
</template>

<script>
import { reactive, onMounted, onUnmounted } from 'vue'
export default {
    name: "Home",
    setup() {
        const state = reactive({
        currentSlide: 0,
        interval: ''
        })

        onMounted(() => {
            state.interval = setInterval(() => {
                if (state.currentSlide === 3) {
                    state.currentSlide = 0
                } else {
                    state.currentSlide++
                }
            }, 5500)
        })

        onUnmounted(() => {
        clearInterval(state.interval)
        })

        return {
        state
        }
    }
}
</script>

<style scoped>
.slider-box {
    background-color: black;
    height: 500px;
    overflow: hidden;
}

.slider-div {
    height: 100%;
    background-position: center;
}

.first-img {
    background-color: blueviolet;
    background-image: url('../assets/images/intelligence.jpg');
}

.second-img {
    background-color: cadetblue;
    background-image: url('../assets/images/businessman.jpg');
}

.third-img {
    background-color: darkgoldenrod;
    background-image: url('../assets/images/hand.jpg');
}

.fourth-img {
    background-color: green;
    background-image: url('../assets/images/emotional.jpg');
}

.slide-enter-active,
.slide-leave-active {
    transition: all 2s ease;
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(100%)
}
.slide-leave-from {
    opacity: 0;
    transform: translateX(-100%)
}
</style>
