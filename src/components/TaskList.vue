<template>
  <div>
    <div v-for="(task, index) in tasks" :key="index">
      <h5 class="inline">Task {{ index + 1 }}</h5>
      <button type="button" class="btn btn-sm inline outline-red mb-2" v-on:click="removeTask(task, index)">
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
      <ul class="list-group">
        <task :task="task"></task>
      </ul>
    </div>
  </div>
</template>

<script>
import Task from './Task';
import api from "@/services/api";

export default {
  components: {
    Task,
  },
  props: ['tasks', 'routine'],
  methods: {
    removeTask(task, index) {
      console.log(task);
      if (task._id) {
        api
          .deleteTask(this.routine.id, task._id)
          .then(() => {
            this.$router.push({ name: 'routine-main' });
          });
      } else {
        this.$emit('removeTask', index);
      }
    }
  }
};
</script>

<style scoped>
.inline {
  display: inline-block;
}
.outline-red {
  color: red;
}
</style>
