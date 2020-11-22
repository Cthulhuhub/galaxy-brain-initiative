<template>
    <div id="pixi-container">

    </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
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
            document.getElementById("pixi-container").appendChild(state.app.view)

            const img = require('../assets/images/space.jpg')
            const image = new PIXI.Sprite.from(img)
            image.width = window.innerWidth;
            image.height = window.innerHeight;
            state.app.stage.addChild(image)

            const disImg = require('../assets/images/maps/firstmap.png')
            state.displacementSprite = new PIXI.Sprite.from(disImg)
            let displacementFilter = new PIXI.filters.DisplacementFilter(state.displacementSprite)
            state.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
            state.app.stage.addChild(state.displacementSprite)
            state.app.stage.filters = [displacementFilter]

            state.app.view.style.transform = 'scale(1.02)'

            state.displacementSprite.scale.x = 10
            state.displacementSprite.scale.y = 10
            animate()
        }

        function animate() {
            state.displacementSprite.x += 2
            state.displacementSprite.y += 1
            requestAnimationFrame(animate)
        }

        onMounted(() => {
            setTimeout(initPixi(), 2000)
        })
    }
}
</script>

<style scoped>
#pixi-container {
    overflow: hidden;
    z-index: -10;
}
</style>