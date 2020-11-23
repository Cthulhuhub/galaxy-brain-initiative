<template>
    <div id="pixi-carousel-container"></div>
</template>

<script>
import * as PIXI from 'pixi.js'
import { onUnmounted, reactive } from 'vue'
export default {
    name: 'PixiCarousel',
    setup() {
        const state = reactive({
            imgs: [
                require('../assets/images/intelligence.jpg'),
                require('../assets/images/businessman.jpg'),
                require('../assets/images/hand.jpg'),
                require('../assets/images/emotional.jpg')
            ],
            app: {},
            sprites: [],
            container: {}
        })

        function initPixi() {
            state.app = new Pixi.Application()
            document.getElementById("pixi-carousel-container").appendChild(state.app.view)
            const parent = state.app.view.parentNode;

            state.app.renderer.resize(parent.clientWidth, parent.clientHeight)
            state.container = new PIXI.Container()
            state.imgs.forEach(img => {
                state.sprites.push(new PIXI.Sprite.from(img))
            })
        }

        onMounted(() => {
            initPixi()
        })

        onUnmounted(() => {
            state.app.destroy()
        })
    }
}
</script>

<style scoped>

</style>