<template>
  <v-app>
    <v-main>
      <div class="maindiv">
        <div class="puzzle">
          <Puzzle @gridUpdated="setGridArray" :solvedGridArray="solvedGridArray"></Puzzle>
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
            @click="solveAlgoActivated"
          >
            Solve puzzle
            <template v-slot:loader>
              <span>Loading...</span>
            </template>
          </v-btn>
          <v-btn
            v-if="solved"
            id="clearbtn"
            class="ma-2"
            :loading="loader1"
            :disabled="loader1"
            color="info"
            @click="clearPuzzle"
          >
            Clear puzzle
            <template v-slot:loader>
              <span>Loading...</span>
            </template>
          </v-btn>
          <v-snackbar
            v-model="snackbar"
            :multi-line="multiLine"
          >
            There is no solution to this sudoku :(
            <template v-slot:action="{ attrs }">
              <v-btn
                color="red"
                text
                v-bind="attrs"
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Puzzle from './components/Puzzle.vue';
import { solvePuzzle, preSolveLegalCheck } from './Solver';

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
    solved: false,
    loader1: false,
    snackbar: false,
    multiLine: true,
    solvedGridArray: [[0, 0, 0, 0, 0, 0, 0, 0, 0], 
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
    }, 
    solveAlgoActivated() {
      this.loader = true;
      if (preSolveLegalCheck(this.gridArray) == false){
        this.noSoln();
      } else {
        let soln = solvePuzzle(this.gridArray);
        if (soln.solvable) {
          this.solvedGridArray = soln.arr;
          this.solved = true;
        } else {
          this.noSoln();
        }
      }
      this.loader = false;
    },
    noSoln() {
      this.snackbar = true;
    },
    clearPuzzle() {
      window.location.reload();
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
