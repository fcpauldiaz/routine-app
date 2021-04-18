<template>
  <div class="mb-3">
    <li class="list-group-item">{{ routine.name }} </li>
    <li class="list-group-item">Number of Tasks: {{ routine.tasks.length }}</li>
  </div>
</template>

<script>
export default {
  props: ['routine'],
};
</script>
