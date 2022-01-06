<template>
  <v-app>
    <v-main>
      <Puzzle @gridUpdated="setGridArray"></Puzzle>
    </v-main>
  </v-app>
</template>

<script>
import Puzzle from './components/Puzzle.vue';

export default {
  name: 'App',
  components: {
      Puzzle,
  },
  data: () => ({
    gridArray: [[0, 0, 0, 0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0]],
    
  }),
  methods: {
    setGridArray(grid) {
      this.gridArray = grid;
      console.log(this.gridArray);
    }
  }
};
</script>
