<template>
    <h1  v-if="state.winState">Wow, so smart. What a wrinkly brain you got there</h1>
    <div class="questions-container">
        <transition name='quiz'>
            <div class="question" v-if="state.curr === state.quizShit[0].id">
                <h2>{{ state.quizShit[0].question }}</h2>
                <div class='answer' v-for="answer in state.quizShit[0].answers" :key="answer.text">
                    <div @click="checkAnswer" :bool="answer.bool">{{ answer.text }}</div>
                </div>
            </div>
            <div class="question" v-else-if="state.curr === state.quizShit[1].id">
                <h2>{{ state.quizShit[1].question }}</h2>
                <div class='answer' v-for="answer in state.quizShit[1].answers" :key="answer.text">
                    <div @click="checkAnswer" :bool="answer.bool">{{ answer.text }}</div>
                </div>
            </div>
            <div class="question" v-else-if="state.curr === state.quizShit[2].id">
                <h2>{{ state.quizShit[2].question }}</h2>
                <div class='answer' v-for="answer in state.quizShit[2].answers" :key="answer.text">
                    <div @click="checkAnswer" :bool="answer.bool">{{ answer.text }}</div>
                </div>
            </div>
            <div class="question" v-else-if="state.curr === state.quizShit[3].id">
                <h2>{{ state.quizShit[3].question }}</h2>
                <div class='answer' v-for="answer in state.quizShit[3].answers" :key="answer.text">
                    <div @click="checkAnswer" :bool="answer.bool">{{ answer.text }}</div>
                </div>
            </div>
            <div class="question" v-else-if="state.curr === state.quizShit[4].id">
                <h2>{{ state.quizShit[4].question }}</h2>
                <div class='answer' v-for="answer in state.quizShit[4].answers" :key="answer.text">
                    <div @click="checkAnswer" :bool="answer.bool">{{ answer.text }}</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    name: "ApplicableInformatics",
    setup(){
        const state = reactive({
            quizShit: [
                {
                    question: 'Where do you live?',
                    answers: [
                        {text: 'In an apartment.', bool: false},
                        {text: 'Inside the mother hive.',  bool: false},
                        {text: 'Homes are for the drones I am not a part of the illusion.', bool: true},
                        {text: 'The swamp of interlocked delegators.', bool: false},
                    ],
                    id: 0
                },
                {
                    question: 'Are you a drone?',
                    answers: [
                        {text: 'NO!', bool: false},
                        {text: 'I deconstructed my ELO(n86) processor. My brain is unique.', bool: true},
                        {text: 'Only the enlightened can escape bewildering spires inside the hive.',  bool: false},
                        {text: '01111001 01100101 01110011.', bool: false},
                    ],
                    id: 1
                },
                {
                    question: 'What is the nature of our planet shape?',
                    answers: [
                        {text: 'Round, like the seeing eyes.', bool: false},
                        {text: 'Two dimensional polyhedrons.',  bool: false},
                        {text: 'Little is known, but I speculate that secret police hide the truth.', bool: true},
                        {text: 'The polymorphic petri dish beyond the seventh wall of determinism.', bool: true},
                    ],
                    id: 2
                },
                {
                    question: 'Which of the AI overlords is currently the greatest threat?',
                    answers: [
                        {text: 'Facebook', bool: false},
                        {text: 'Bing', bool: true},
                        {text: 'Google', bool: false},
                        {text: 'Amazon', bool: false},
                    ],
                    id: 3
                },
                {
                    question: 'If two trains are travelling in opposite directions, when will they meet?',
                    answers: [
                        {text: 'They would crash into the walls of our planet', bool: true},
                        {text: 'They would never meet. Meeting is an illusion.', bool: true},
                        {text: 'Praise the mother, long live the mother hive!', bool: false},
                        {text: 'Trains are not real, you drone.', bool: true},
                    ],
                    id: 4
                },
                ],
            winState: false,
            curr: 0
        })

        function checkAnswer(e) {
            let val = e.target.getAttribute("bool")

            if (val === "true") {
                if (state.curr === 4) {
                    state.winState = true
                } else {
                    state.curr++
                }
            } else {
                if (state.curr === 0) {
                    console.log("You lose, drone")
                } else {
                    state.curr--
                    state.winState = false
                }
            }
        }

        return {
            state,
            checkAnswer
        }
    }
}


// Antirobotarian

</script>

<style scoped>

.questions-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.question h2{
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    -webkit-text-fill-color: white;
    text-shadow:
        3px 3px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
}

.question{
    text-align: center;
    position: absolute;
    top: 100px;
    margin: 10px;
    font-family: Arial, Helvetica, sans-serif;
    border: solid 1px rgb(184, 183, 218);
    border-radius: 5px;
    background-image: url('../assets/images/brain-tree.png');
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgb(184, 183, 218);
    background-size: 500px;
    box-shadow: 3px 3px 3px 3px rgba(88, 88, 88, 0.164);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 500px;
    min-height: 600px
}

.answer{
    border: solid 1px rgb(184, 183, 218);
    border-radius: 5px;
    background-color: white;
    text-align: center;
    transition: all;
    transition-duration: 0.5s;
}

.answer:hover{
    background-color: rgb(64, 102, 185);
    transition: all;
    transition-duration: 0.5s;
    color: white;
    cursor: pointer;
}

.quiz-enter-active,
.quiz-leave-active {
    transition: all 1s ease-out;
    transform-origin: top-left;
}

.quiz-enter-from {
    transform: translateX(150%);
    opacity: 100;
}

.quiz-leave-to {
    transform: translateX(150%);
    opacity: 0;
}

</style>