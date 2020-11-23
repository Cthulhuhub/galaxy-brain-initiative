<template>
    <h1>Wow, so smart. What a wrinkly brain you got there</h1>
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
                    answer1: {text: 'In an apartment.', bool: false},
                    answer2: {text: 'Inside the mother hive.',  bool: false},
                    answer3: {text: 'Homes are for the drones I am not a part of the illusion.', bool: true},
                    answer4: {text: 'The swamp of interlocked delegators.', bool: false}
                },
                {
                    question: 'Are you a drone?',
                    answer1: {text: 'NO!', bool: false},
                    answer2: {text: 'I deconstructed my ELO(n86) processor. My brain is unique.', bool: true},
                    answer3: {text: 'Only the enlightened can escape bewildering spires inside the hive.',  bool: false},
                    answer4: {text: '01111001 01100101 01110011.', bool: false}
                },
                {
                    question: 'What is the nature of our planet shape?',
                    answer1: {text: 'Round, like the seeing eyes.', bool: false},
                    answer2: {text: 'Two dimensional polyhedrons.',  bool: false},
                    answer3: {text: 'Little is known, but I speculate that secret police hide the truth.', bool: true},
                    answer4: {text: 'The polymorphic petri dish beyond the seventh wall of determinism.', bool: true}
                },
                {
                    question: 'Which of the AI overlords is currently the greatest threat?',
                    answer1: {text: 'Facebook', bool: false},
                    answer2: {text: 'Bing', bool: true},
                    answer3: {text: 'Google', bool: false},
                    answer4: {text: 'Amazon', bool: false},
                }
                ],
            winState: false,
            scale: 3
        })

        return {
            state
        }
    }
}

</script>

<style scoped>

</style>