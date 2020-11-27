<template>
    <div class="button-box">
        <SpaceAni />
        <button v-for="(spot, i) in state.count" class="button" :key="i" :id="`runaway-${i}`" @mouseenter="runAway($event)" @click="moreButton">E N H A N C E</button>
    </div>
</template>

<script>
import anime from 'animejs'
import SpaceAni from '../components/SpaceAni'
import { reactive } from 'vue'
export default {
    name: "Impossible Button",
    components: {
        SpaceAni
    },
    setup() {
        const state = reactive({
            count: new Array(1),
            scale: 2
        })

        function runAway(e) {
            const button = e.target
            const top = getNum((window.innerHeight*0.8))
            const left = getNum((window.innerWidth*0.8))
            setTimeout(() => {
                animateMove(button, "left", left).play()
                animateMove(button, "top", top).play()
            }, 100)
        }

        function getNum(num) {
            return Math.floor(Math.random() * (num + 1))
        }

        function animateMove(el, prop, px) {
            return anime({
                targets: el,
                [prop]: `${px}px`,
                scale: state.scale,
                easing: "easeOutCirc"
            })
        }

        function moreButton(e) {
            state.count.push(state.count.length)
            if (state.scale > 0.1) {
                state.scale -= 0.05
            }
            setTimeout(() => {
                const newButt = document.getElementById(`runaway-${state.count.length - 1}`)
                newButt.style.transform = `scale(${state.scale}`
                const top = getNum(window.innerHeight*0.8)
                const left = getNum(window.innerWidth*0.8)
                const top2 = getNum(window.innerHeight*0.8)
                const left2 = getNum(window.innerWidth*0.8)
                animateMove(newButt, "left", left).play()
                animateMove(newButt, "top", top).play()
                animateMove(e.target, "left", left2).play()
                animateMove(e.target, "top", top2).play()
            }, 0)
        }

        return {
            runAway,
            moreButton,
            state
        }
    }
}
</script>

<style scoped>
.button-box {
    position: absolute;
    width: 100%;
    height: 91.5%;
    overflow: hidden;
}

.button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 4rem;
    width: 12rem;
    font-size: 1.5rem;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 5px black;
    background-color: white;
}
</style>