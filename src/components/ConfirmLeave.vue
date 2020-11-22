<template>
    <div class="background" @click="closeModal">
        <div class="confirmation-modal">
            <span class="scolding-text">Leaving is dangerous - you are not yet prepared</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConfirmLeave',
    setup(props, ctx) {

        function closeModal() {
            ctx.emit('close-modal')
        }

        return {
            closeModal
        }
    }
}
</script>

<style scoped>
.background {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
}

.confirmation-modal {
    background-color: white;
    width: 50%;
    height: 40%;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
}
</style>