<template>
  <div>
    <div v-for="(routine, index) in routines" v-bind:key="routine.id">
      <h5 class="inline">Routine {{ index + 1 }}</h5>
      <button type="button" class="btn btn-sm inline outline-red mb-2" v-on:click="deleteRoutine(routine)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-square"
          viewBox="0 0 16 16"
        >
          <path
            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
          ></path>
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
      </button>
       <button type="button" class="btn btn-sm inline outline-blue mb-2" v-on:click="viewRoutine(routine)">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
        </svg>
      </button>
      
      <ul class="list-group">
        <routine :routine="routine"></routine>
      </ul>
    </div>
  </div>
</template>

<script>
import Routine from './Routine.vue';
import api from "@/services/api";

export default {
  components: { Routine },
  props: ["routines"],
  data: () => ({
    message: null,
  }),
  methods: {
    deleteRoutine(routine) {
      api
        .deleteRoutine(routine.id)
        .then(() => this.$emit('refresh'))
        .catch(({ response }) => {
          this.message = response.data.message;
        })
    },
    viewRoutine(routine) {
      this.$router.push({ name: 'view-routine', params: {
        routine,
        id: routine.id
      }});
    }
  }
};
</script>

<style>
.inline {
  display: inline-block;
}
.outline-red {
  color: red;
}
.outline-blue {
  color: blue;
}
</style>
