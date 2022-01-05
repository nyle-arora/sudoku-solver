<template>
    <div class="row">
        <Square class="bottomRow firstCol" @charEntered="setRowArray(0, $event)"></Square>
        <Square class="bottomRow" @charEntered="setRowArray(1, $event)"></Square>
        <Square class="bottomRow thirdCol" @charEntered="setRowArray(2, $event)"></Square>
        <Square class="bottomRow" @charEntered="setRowArray(3, $event)"></Square>
        <Square class="bottomRow" @charEntered="setRowArray(4, $event)"></Square>
        <Square class="bottomRow thirdCol" @charEntered="setRowArray(5, $event)"></Square>
        <Square class="bottomRow" @charEntered="setRowArray(6, $event)"></Square>
        <Square class="bottomRow" @charEntered="setRowArray(7, $event)"></Square>
        <Square class="bottomRow thirdCol" @charEntered="setRowArray(8, $event)"></Square>
    </div>
</template>

<script>
import Square from './Square.vue'

export default {
    name: 'BottomRow',
    components: {
        Square,
    },
    data() {
        return {
            rowArray: [null, null, null, null, null, null, null, null, null],
        }
    }, 
    methods: {
        setRowArray(index, char) {
            this.rowArray[index] = char;
            this.$emit('rowUpdated', this.rowArray);
        }
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