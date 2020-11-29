<template>
    <img :src="require('../assets/images/prismatic-dragon-head.png')" class="hydra-head" />
</template>

<script>
import { reactive } from 'vue'
export default {
    name: "HydraHead",
    setup(props) {

        const state = reactive({
            scale: props.scale,
        })

        return {
            state
        }
    }
}
</script>

<style scoped>
.hydra-head {
    opacity: 100;
    transition: all 1s ease;
    display: inline-block;
    max-height: 200px;
    max-width: 200px;
    min-width: 20px;
    min-height: 20px;
}
</style>