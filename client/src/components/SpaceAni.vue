<template>
    <div id="space-ani-container">

    </div>
</template>

<script>
import { onMounted, onUnmounted, reactive } from 'vue';
import * as PIXI from 'pixi.js'
export default {
    name: "SpaceAni",
    setup() {

        const state = reactive({
            displacementSprite: {},
            app: {}
        })

        function initPixi() {
            state.app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight })
            document.getElementById("space-ani-container").appendChild(state.app.view)

            const img = require('../assets/images/space.jpg')
            const image = new PIXI.Sprite.from(img)
            image.width = window.innerWidth;
            image.height = window.innerHeight;
            state.app.stage.addChild(image)

            const disImg = require('../assets/images/maps/secondmap.png')
            state.displacementSprite = new PIXI.Sprite.from(disImg)
            let displacementFilter = new PIXI.filters.DisplacementFilter(state.displacementSprite)
            state.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
            state.app.stage.addChild(state.displacementSprite)
            state.app.stage.filters = [displacementFilter]

            state.app.view.style.transform = 'scale(1.02)'

            state.displacementSprite.scale.x = 0.9
            state.displacementSprite.scale.y = 0.9
            animate()
        }

        function animate() {
            state.displacementSprite.x += 2
            state.displacementSprite.y += 1.5
            requestAnimationFrame(animate)
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
#space-ani-container {
    overflow: hidden;
}
</style>