<template>
    <div class="button-container" :style="`margin-top: ${state.margin}px`" v-if="!state.winState">
        <transition-group name="heads" tag="div" class="ani-box">
            <component class="head-box" v-for="(head, i) in state.countArr" :is="head" :key="i" @click="handleClick($event)" :id="i" :scale="state.scale">
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
            scale: 5,
            margin: 200,
            nextId: 5,
            removedCount: 0
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
                for (let i = 0; i < 5; i++) {
                    setTimeout(addHead, 200*i)
                }
                let boxes = document.querySelectorAll(".head-box")
                boxes.forEach(box => {
                    box.style.transform = `scale(${state.scale})`
                })
                if (state.scale >= 0.25) {
                    state.scale -= 0.02
                    if (state.margin > 0) {
                        state.margin -= 0.5
                    }
                }
            }
            shuffleArray(state.countArr)
        }

        onMounted(() => {
            for (let i = 0; i < 5; i++) {
                setTimeout(addHead, 200*i)
            }
        })

        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        function addHead() {
            let rawHead = markRaw(HydraHead)
            state.countArr.push(rawHead)
            state.nextId++
            let boxes = document.querySelectorAll(".hydra-head")
            setTimeout(() => {
                boxes.forEach(box => {
                    box.style.transform = `scale(${state.scale})`
                })
            }, 1000)
        }

        function playAgain() {
            state.countArr = []
            for (let i = 0; i < 5; i++) {
                setTimeout(addHead, 200*i)
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
.ani-box {
    width: 100%;
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
    opacity: 0;
    transform: translateY(200%);
}

.heads-enter-to {
    opacity: 100;
}

.heads-leave-to {
    opacity: 0;
    transform: translateY(-200%);
}

.heads-move {
    transition: transform 0.8s ease;
}
</style>