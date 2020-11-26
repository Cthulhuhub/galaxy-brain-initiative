<template>
    <div class="home-body">
        <div class="slider-box">
            <transition name="slide">
                <div v-if="state.currentSlide === 0" class="slider-div first-img">
                    <h2 class="card-title">Boost your congitive abilities to new levels</h2>
                </div>
                <div v-else-if="state.currentSlide === 1" class="slider-div second-img">
                    <h2 class="card-title">Maximize your energistic synergy</h2>
                </div>
                <div v-else-if="state.currentSlide === 2" class="slider-div third-img">
                    <h2 class="card-title">Develop the means to outwit the AI overlords</h2>
                </div>
                <div v-else-if="state.currentSlide === 3" class="slider-div fourth-img">
                    <h2 class="card-title">Inherit emotional balance from your surrounding spirits</h2>
                </div>
            </transition>
        </div>
        <div class='quote-container'>
            <transition name="quotes">
                <div class='quote-card' v-if="state.show">
                    <div class='quote-card-header'><span>Embrace Youthful Cognition</span></div>
                    <div class='quote-card-body'><span>Hold onto the world, but let go of your world. The world is no longer here. You misplaced it.</span></div>
                </div>
            </transition>
            <transition name="quotes">
                <div class='quote-card' v-if="state.show">
                    <div class='quote-card-header'><span>Accept Subjective Reality</span></div>
                    <div class='quote-card-body'><span>Deconstruct the principals of science. Reconstruct the dream scape.</span></div>
                </div>
            </transition>
            <transition name="quotes">
                <div class='quote-card' v-if="state.show">
                    <div class='quote-card-header'><span>Objecftify Objective Reality</span></div>
                    <div class='quote-card-body'><span>"Thine eyes show what art of thy own vision, thou must peer through the eyes of thine outer being" - Hrabanus Maurus</span></div>
                </div>
            </transition>
        </div>
        <Foot />
    </div>
</template>

<script>
import { reactive, onMounted, onUnmounted } from 'vue'
import Foot from '../components/Foot.vue'
export default {
    name: "Home",
    components: {
        Foot
    },
    setup() {
        const state = reactive({
            currentSlide: 0,
            interval: '',
            show: false
        })

        onMounted(() => {
            state.show = true;
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
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
    opacity: 100;
}

.slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.card-title {
    margin: 0;
    font-family: 'Montserrat Subrayada', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: white;
    text-shadow: 3px 3px 0 #000,
     -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
}

.quote-container{
    display: flex;
    margin-top: 50px;
    justify-content: space-around;
    font-family: 'Roboto', sans-serif;
}

.quote-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    box-shadow: 3px 3px 3px 3px rgba(88, 88, 88, 0.246);
    max-width: 23%;
    min-height: 300px;
    transition: all 10s ease;
    overflow: hidden;
}

.quote-card:hover{
    cursor: default;
    transition: all 0.25s ease;
    opacity: 0;
    transform: translateY(25%);
}

@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

.quote-card-header{
    display: flex;
    font-family: 'Staatliches', cursive;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    background-image: url('../assets/images/brain.png');
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    border-radius: 3px 3px 0 0;
    padding: 15px 10px;
    text-align: center;
    font-size: 34px;
    font-weight: 900;
    min-height: 50px;
    width: 100%;
    overflow: hidden;
    color: white;
    text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
}

.quote-card-body{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: black;
    height: 65%;
    padding: 10px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.quotes-enter-active {
    opacity: 100;
    transition: all 2s ease;
}

.quotes-enter-from {
    opacity: 0;
    transform: translateY(100%)
}
</style>
