<script>
import NotepadTool from './components/NotepadTool.vue'
import DateTimePicker from './components/TanKuang.vue'

export default {
  name: 'App',
  components: {
    NotepadTool,
    DateTimePicker
  }
}
</script>

<template>
  <NotepadTool />
  <DateTimePicker />
</template>

<style scoped></style>
