<template>
  <div>
    <h3>Routine List</h3>
    <routine-list v-bind:routines="routines" v-on:refresh="getRoutines"></routine-list>
    <button
      type="button"
      class="btn btn-dark btn-lg btn-block"
      v-on:click="createRoutine"
    >
      Create Routine
    </button>
  </div>
</template>

<script>
import api from '@/services/api';
import RoutineList from './RoutineList';

export default {
  components: {
    RoutineList,
  },
  data: () => ({
    routines: [],
  }),
  mounted() {
    this.getRoutines();
  },
  methods: {
    createRoutine() {
      this.$router.push('routine/create');
    },
    getRoutines() {
      api
        .getRoutines()
        .then(({ data }) => {
          this.routines = data;
        });
    },
  },
};
</script>

<style></style>
