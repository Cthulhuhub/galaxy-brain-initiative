<template>
    <div class="button-container" :style="`margin-top: ${state.margin}px`" v-if="!state.winState">
        <transition-group name="heads" tag="div">
            <component class="head-box" v-for="(head, i) in state.countArr" :is="head" :key="i" @click="handleClick($event)" :id="i" :scale="state.scale" :style="`transform: scale(${state.scale}, ${state.scale})`">
            </component>
        </transition-group>
    </div>
    <div class='ur-a-weiner' v-if="state.winState">
        <div class="play-again-wrapper" @click="playAgain()" id="weiner-again"> Play Again </div>
    </div>
</template>

<script>
import { onMounted, reactive, markRaw } from 'vue';
import HydraHead from '../components/HydraHead.vue'
export default {
    name: "ButtonHydra",
    components: {
        HydraHead
    },
    setup() {
        const state = reactive({
            countArr: [],
            winState: false,
            scale: 3,
            margin: 200,
            nextId: 5
        })

        function handleClick(e) {
            if (state.winState) {
                return;
            }
            let winner = Math.floor(Math.random() * (state.countArr.length - 1))
            if (state.countArr.length < 50) {
                winner = '';
            }

            if (parseInt(e.target.id, 10) === winner) {
                state.winState = true
            } else {
                addHeads()
                if (state.scale >= 0.25) {
                    state.scale -= 0.02
                    if (state.margin > 0) {
                        state.margin -= 2
                    }
                }
            }
        }

        onMounted(() => {
            addHeads()
        })

        function addHeads() {
            for (let i = 0; i < 5; i++) {
                state.countArr.push(markRaw(HydraHead))
                state.nextId++
            }
        }

        function playAgain() {
            state.countArr = []
            state.nextId = 0
            for (let i = 0; i < 5; i++) {
                state.countArr.push(markRaw(HydraHead))
                state.nextId++
            }
            state.winState = false
            state.scale = 3
            state.margin = 200
        }

        return {
            state,
            handleClick,
            playAgain,
        }
    }
}
</script>

<style scoped>
.button-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow-wrap: anywhere;
}

.head-box {
    height: 100px;
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

.heads-enter-active {
    opacity: 100;
}

.heads-leave-active{
    transition: all 1s ease;
}

.heads-enter-from {
    opacity: 100;
    transform: translateY(-100%);
}

.heads-enter-to {
    opacity: 100;
}

.heads-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

.heads-move {
    transition: transform 0.8s ease;
}
</style>