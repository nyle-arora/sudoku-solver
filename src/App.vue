<template>
  <v-app>
    <v-main>
      <div class="maindiv">
        <div class="puzzle">
          <Puzzle @gridUpdated="setGridArray"></Puzzle>
        </div>
        <div class="sidebar">
          <h1>Vue Sudoku Solver</h1>
          <p>This online sudoku solver uses an recursive backtracking algorithm to solve standard 9x9 sudoku puzzles</p>
          <p>To solve your sudoku puzzle, enter in all the given numbers in the grid on the left and then press the 'Solve' button below
            to get a complete solution to your puzzle!</p>
          <v-btn
            id="solvebtn"
            class="ma-2"
            :loading="loader"
            :disabled="loader"
            color="info"
            @click="solvePuzzle"
          >
            Solve puzzle
            <template v-slot:loader>
              <span>Loading...</span>
            </template>
          </v-btn>
        </div>
      </div>
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
    loader: false,
    
  }),
  methods: {
    setGridArray(grid) {
      this.gridArray = grid;
      console.log(this.gridArray);
    }, 
    solvePuzzle() {
      this.loader = true;
      console.log('ready to solve');
      setTimeout(() => (this.loader = false), 10000)
    }
  }
};
</script>

<style scoped>
  
  .maindiv {
    display: flex;
  }

  .puzzle {
    margin-left: 10px;
    margin-top: 10px;
  }

  .sidebar {
    margin: auto;
    margin-left: 10px;
  }

  #solvebtn {
    width: 50%;
    margin: 0 auto;
  }


</style>
