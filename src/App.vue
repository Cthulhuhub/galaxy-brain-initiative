<template>
    <div id="app">
        <ConfirmLeave v-if="state.isConfirmOpen" :state="state" @close-modal="closeModal"/>
        <nav>
            <NavBar :name="$route.name" />
        </nav>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import NavBar from "./components/NavBar.vue";
import ConfirmLeave from "./components/ConfirmLeave.vue"
export default {
    name: "App",
    components: {
        NavBar,
        ConfirmLeave
    },
    setup() {
        const state = reactive({
            isConfirmOpen: false
        })

        onMounted(() => {
            window.addEventListener('beforeunload', e => {
                console.log('Here')
                handleLeave()
                e.returnValue = 'no'
            })
        })

        function handleLeave() {
            state.isConfirmOpen = true
        }

        function closeModal() {
            state.isConfirmOpen = false
        }

        return {
            state,
            handleLeave,
            closeModal
        }
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Xanh+Mono&display=swap");
a {
  text-decoration: none;
  color: white;
}

body {
  font-family: "Xanh Mono", monospace;
  font-size: 30px;
  background-color: rgb(246, 237, 250);
  margin: 0;
}
</style>
