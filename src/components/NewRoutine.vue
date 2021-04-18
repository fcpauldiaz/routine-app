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
      <task-list v-bind:tasks="tasks" v-bind:routine="routine" v-on:removeTask="removeTask"></task-list>
      <task-form v-on:saveTask="saveTask" v-if="!showAddTask"></task-form>
      <div class="form-group" v-if="message">
        <label>{{ message }}</label>
      </div>
      <button
        type="button"
        class="btn btn-dark btn-lg btn-block mb-2 mt-2"
        v-on:click="addTask"
        v-if="showAddTask && disabled === false"
      >
        {{ tasks.length === 0 ? 'Add Task' : 'Add Another Task' }}
      </button>
      <button
        type="button"
        class="btn btn-dark btn-lg btn-block"
        v-on:click="saveRoutine"
        v-if="tasks.length > 0 && disabled === false"
      >
        Save Routine
      </button>
      <button
        type="button"
        class="btn btn-dark btn-lg btn-block mt-2"
        v-on:click="goRoutineList"
        v-if="disabled === true"
      >
        Return
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
  props: {
    routine: {
      default: () => {},
      required: false
    }
  },
  data: () => ({
    name: null,
    tasks: [],
    showAddTask: true,
    message: null,
    disabled: false,
  }),
  mounted() {
    if (this.routine) {
      this.tasks = this.routine.tasks;
      this.name = this.routine.name;
      this.disabled = true;
    }
  },
  methods: {
    addTask() {
      this.showAddTask = false;
    },
    removeTask(index) {
      this.tasks = this.tasks.filter((v, i) => i != index);
    },
    saveTask(data) {
      this.tasks.push(data);
      this.showAddTask = true;
    },
    goRoutineList() {
      this.$router.push({ name: 'routine-main'})
    },
    saveRoutine() {
      this.message = null;
      if (!this.name || this.tasks.length === 0) {
        this.message = 'Empty values not allowed';
        return;
      }
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
