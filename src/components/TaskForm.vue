<template>
  <div>
    <div class="form-group">
      <label>Time</label>
      <input type="datetime-local" v-model="time" class="form-control form-control-lg" />
    </div>
    <div class="form-group">
      <label>Type</label>
      <input type="type" v-model="type" class="form-control form-control-lg" />
    </div>
    <button
      type="submit"
      v-on:click="saveTask"
      class="btn btn-dark btn-lg btn-block mb-2"
    >
      Save Task
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    type: null,
    time: null,
  }),
  methods: {
    saveTask() {
      this.$emit('saveTask', { time: this.time, type: this.type });
    },
  },
};
</script>
