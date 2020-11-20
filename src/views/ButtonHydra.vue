<template>
    <div class="toast-button">Click hear for DE@LS oN Mega Toast! :) (Mega toast doesn't solve any issues with mega birds)</div>
    <div class="secret-button-wrapper">
        <a href="https://youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="secret-button">secret</a>
    </div>
    <div class="scratch-div" @click="handleScratch()">Scratch at the mind creator.</div>
    <div class="button-container" v-if="!state.winState">
        <div class="hydra-head" v-for="(val, index) in state.countArr" v-bind:id="index" :key="index" @click="handleClick($event); state.countArr = new Array(state.countArr.length += 5)"></div>
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
            winState: false
        })

        function handleClick(e) {
            if (state.winState) {
                return;
            }
            const winner = Math.floor(Math.random() * (state.countArr.length - 1))

            if (parseInt(e.target.id, 10) === winner) {
                state.winState = true
                console.log('You win!')
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
.toast-button{
    border: solid 1px black;
    background-color: white;
    width: 500px;
    box-shadow: 5px 5px 5px 5px gray;
    transition: all;
    transition-duration: 10s;
}
.toast-button:hover{
    color: pink;
    font-size: 10px;
    background-color: blue;
    border-radius: 100px;
    transform: scale(2.5, 0.5);
    transition: all;
    transition-duration: 10s;
}

.secret-button-wrapper{
    margin-top: 20px;
    color: rgb(246, 237, 250);
}

.secret-button{
    color: rgb(246, 237, 250);
    margin-top: 19px;
    height: 40px;
    width: 40px;
}

.scratch-div {
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 10px;
    align-items: center;
    text-align: center;
    margin-top: 100px;
    border-radius: 100px;
    width: 100px;
    height: 100px;
    background-color: rgb(72, 48, 136);
    color: white;
}

.hydra-head {
    display: inline-block;
    background-image: url('../assets/images/prismatic-dragon-head.png');
    height: 200px;
    width: 125px;
    background-size: 125px 200px;
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