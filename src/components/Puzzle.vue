<template>
  <v-card elevation="2">
    <FirstRow></FirstRow>
    <Row></Row>
    <Row></Row>
    <FirstRow></FirstRow>
    <Row></Row>
    <Row></Row>
    <FirstRow></FirstRow>
    <Row></Row>
    <BottomRow></BottomRow>
  </v-card>  
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
            
        }
    }
}

</script>

<style scoped>

</style>


