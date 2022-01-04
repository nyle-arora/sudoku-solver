<template>
  <v-app>
    <v-main>
      <Puzzle></Puzzle>
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
    //
  }),
};
</script>
