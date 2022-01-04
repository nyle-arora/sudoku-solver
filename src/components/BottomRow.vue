<template>
    <div class="row">
        <Square class="bottomRow firstCol"></Square>
        <Square class="bottomRow"></Square>
        <Square class="bottomRow thirdCol"></Square>
        <Square class="bottomRow"></Square>
        <Square class="bottomRow"></Square>
        <Square class="bottomRow thirdCol"></Square>
        <Square class="bottomRow"></Square>
        <Square class="bottomRow"></Square>
        <Square class="bottomRow thirdCol"></Square>
    </div>
</template>

<script>
import Square from './Square.vue'

export default {
    name: 'BottomRow',
    components: {
        Square,
    }

}

</script>

<style scoped>

.row {
    display: flex;
}

.bottomRow {
    border-bottom: 3px solid black;
}

.firstCol {
    border-left: 3px solid black;
}

.thirdCol {
    border-right: 3px solid black;
}

</style>