<template>
    <div class="button-container" v-if="!state.winState">
        <img :src="require('../assets/images/prismatic-dragon-head.png')" class="hydra-head" :style="`transform: scale(${state.scale}, ${state.scale})`" v-for="(val, index) in state.countArr" v-bind:id="index" :key="index" @click="handleClick($event); state.countArr = new Array(state.countArr.length += 5)" />
    </div>
    <div class='ur-a-weiner' v-if="state.winState">
        <div class="play-again-wrapper" @click="playAgain()" id="weiner-again"> Play Again </div>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: "ButtonHydra",
    setup() {
        const state = reactive({
            countArr: new Array(5),
            winState: false,
            scale: 3
        })

        function handleClick(e) {
            if (state.winState) {
                return;
            }
            let winner = Math.floor(Math.random() * (state.countArr.length - 1))
            if (winner < 50) {
                winner += 25;
            }
            if (parseInt(e.target.id, 10) === winner) {
                state.winState = true
            } else {
                if (state.scale >= 0.25) {
                    state.scale -= 0.04
                }
            }
        }

        function handleScratch() {
            console.log('play')
            const sound = new Audio( require('../assets/sounds/screach.mp3') ).play()
            return sound;
        }

        function playAgain() {
            state.countArr = new Array(5)
            state.winState = false
        }

        return {
            state,
            handleClick,
            handleScratch,
            playAgain,
        }
    }
}
</script>

<style scoped>
.button-container {
    display: flex;
    flex-wrap: wrap;
    overflow-wrap: anywhere;
}

.hydra-head {
    display: inline;
    max-height: 300px;
    max-width: 200px;
    margin-top: 300px;
}

.hydra-head:hover {
    cursor: pointer;
}

.ur-a-weiner {
    background-image: url('../assets/images/ImpartialRemoteFlamingo-small.gif');
    width: 98vw;
    height: 500px;
    background-size: 98vw 500px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

#weiner-again {
    position: absolute;
    top: 65%;
    padding: 20px;
    border: solid 1px black;
    background-color: rgb(211, 115, 115);
    border-radius: 60px;
    text-align: center;
}

.play-again-wrapper {
    position: absolute;
    top: 65%;
    height: 80px;
    width: 80px;
}

#weiner-again:hover {
    cursor: pointer;
    color: white;
    transform: rotate(6969420deg);
    border-radius: 0px;
    transition-duration: 6000s;
}
</style>