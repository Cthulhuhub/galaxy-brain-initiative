<template>
    <SpaceAni />
    <div class="exercises-list-container">
        <div class="exercise-box" v-for="exercise in state.exercises" :key="exercise.name">
            <div :class="`${exercise.name}-box`">
                <div class="exercise-img-container">
                    <img :src="require(`../assets/images/${exercise.imgName}`)" />
                </div>
                <div class="exercise-info">
                    <div class="exercise-title"><h4><router-link :to="{ name: exercise.name }">{{exercise.title}}</router-link></h4></div>
                    <span>{{exercise.info}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import SpaceAni from '../components/SpaceAni.vue'
export default {
    name: "Exercises",
    components: {
        SpaceAni,
    },
    setup() {
        const state = reactive({
            exercises: [
                {
                    name: 'ButtonHydra',
                    title: 'Button Hydra',
                    info: 'Train your intuition and ingenuity by finding and slaying the correct Hydra head',
                    imgName: 'prismatic-dragon-head.png'
                },
                {
                    name: 'ApplicableInformatics',
                    title: 'Applicable Informatics',
                    info: 'Ensure your mental data integrity and enhance galactic perceptions',
                    imgName: 'crankbrain.png'
                },
                {
                    name: 'ImpossibleButton',
                    title: 'Agility Enhancement',
                    info: 'Prepare yourself for one on one CQC with AI combatants',
                    imgName: 'speed.jpg'
                }
            ],
        })

        return {
            state
        }
    }
}
</script>

<style scoped>
.exercises-list-container {
    z-index: 10;
    display: flex;
    flex-direction: row;
}

.exercise-box {
    transition: all .75s ease;
    width: 350px;
    height: 350px;
    box-sizing: border-box;
    padding: 20px;
    margin: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 4px 4px 4px 4px rgba(88, 88, 88, 0.116);
}

.exercise-box:hover {
    transform: scale(1.1, 1.1);
}

.exercise-info {
    font-size: 20px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.exercise-title {
    margin-bottom: 10px;
    background-color: rgb(0, 0, 0);
    width: 113%;
    text-align: center;
}

.exercise-title h4 {
    margin: 10px 0 10px 0;
}

.exercise-info > span {
    text-align: center;
}

.exercise-img-container {
    width: 300px;
    height: 150px;
    display: flex;
    justify-content: center;
    background-color: white;
}

.exercise-img-container > img {
    max-width: 100%;
    max-height: 100%;
}
</style>