<template>
  <div>
    <form>
      <h3>Create Routine</h3>
      <label>Name</label>
      <input
        type="text"
        v-model="name"
        class="form-control form-control-lg mb-2"
      />
      <task-list v-bind:tasks="tasks"></task-list>
      <task-form v-on:saveTask="saveTask" v-if="!showAddTask"></task-form>
      <div class="form-group" v-if="message">
        <label>{{ message }}</label>
      </div>
      <button
        type="button"
        class="btn btn-dark btn-lg btn-block mb-2 mt-2"
        v-on:click="addTask"
        v-if="showAddTask"
      >
        {{ tasks.length === 0 ? 'Add Task' : 'Add Another Task' }}
      </button>
      <button
        type="button"
        class="btn btn-dark btn-lg btn-block"
        v-on:click="saveRoutine"
        v-if="tasks.length > 0"
      >
        Save Routine
      </button>
    </form>
  </div>
</template>
<script>
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import api from '@/services/api';

export default {
  components: {
    TaskForm,
    TaskList,
  },
  data: () => ({
    name: null,
    tasks: [],
    showAddTask: true,
    message: null,
  }),
  methods: {
    addTask() {
      this.showAddTask = false;
    },
    saveTask(data) {
      this.tasks.push(data);
      this.showAddTask = true;
    },
    saveRoutine() {
      this.message = null;
      api
        .saveRoutine({ name: this.name, tasks: this.tasks })
        .then(() => {
          this.$router.push('/routine');
        })
        .catch(({ response }) => {
          this.message = response.data.message;
        });
    },
  },
};
</script>
