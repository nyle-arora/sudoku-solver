<template>
  <div>
    <FirstRow @rowUpdated="setGridArray(0, $event)"></FirstRow>
    <Row @rowUpdated="setGridArray(1, $event)"></Row>
    <Row @rowUpdated="setGridArray(2, $event)"></Row>
    <FirstRow @rowUpdated="setGridArray(3, $event)"></FirstRow>
    <Row @rowUpdated="setGridArray(4, $event)"></Row>
    <Row @rowUpdated="setGridArray(5, $event)"></Row>
    <FirstRow @rowUpdated="setGridArray(6, $event)"></FirstRow>
    <Row @rowUpdated="setGridArray(7, $event)"></Row>
    <BottomRow @rowUpdated="setGridArray(8, $event)"></BottomRow>
  </div> 
</template>

<script>
import Row from './Row.vue';
import FirstRow from './FirstRow.vue';
import BottomRow from './BottomRow.vue'

export default {
    name: 'Puzzle',
    components: {
        Row,
        FirstRow,
        BottomRow,
    }, 
    data() {
        return {
            gridArray: [[0, 0, 0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                        [0, 0, 0, 0, 0, 0, 0, 0, 0]],
        }
    }, 
    methods: {
      setGridArray(index, row) {
        this.gridArray[index] = row.slice();
        this.$emit('gridUpdated', this.gridArray);
      }
    }
}

</script>

<style scoped>

</style>


