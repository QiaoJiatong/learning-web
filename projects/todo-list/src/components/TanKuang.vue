<template>
    <div>
      <input type="datetime-local" v-model="date" />
      <p>当前选择的日期时间：{{ date }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DateTimePicker',
    data() {
      return {
        date: ''
      };
    }
  };
  </script>