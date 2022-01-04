<template>
    <div class="row">
        <Square class="firstCol"></Square>
        <Square></Square>
        <Square class="thirdCol"></Square>
        <Square></Square>
        <Square></Square>
        <Square class="thirdCol"></Square>
        <Square></Square>
        <Square></Square>
        <Square class="thirdCol"></Square>
    </div>
</template>

<script>
import Square from './Square.vue'

export default {
    name: 'Row',
    components: {
        Square,
    }

}

</script>

<style scoped>

.row {
    display: flex;
}

.firstCol {
    border-left: 3px solid black;
}

.thirdCol {
    border-right: 3px solid black;
}

</style>
