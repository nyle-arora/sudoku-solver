<template>
    <div class="row">
        <Square class="topRow firstCol"></Square>
        <Square class="topRow"></Square>
        <Square class="topRow thirdCol"></Square>
        <Square class="topRow"></Square>
        <Square class="topRow"></Square>
        <Square class="topRow thirdCol"></Square>
        <Square class="topRow"></Square>
        <Square class="topRow"></Square>
        <Square class="topRow thirdCol"></Square>
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

.topRow {
    border-top: 3px solid black;
}

.firstCol {
    border-left: 3px solid black;
}

.thirdCol {
    border-right: 3px solid black;
}

</style>