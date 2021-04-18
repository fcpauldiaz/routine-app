<template>
  <div>
    <li class="list-group-item">{{ task.time }} </li>
    <li class="list-group-item">{{ task.type }}</li>
  </div>
</template>

<script>
export default {
  props: ['task'],
};
</script>
