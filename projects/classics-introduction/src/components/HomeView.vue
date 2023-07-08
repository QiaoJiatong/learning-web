<template>
  <div class="home">
    <MainContent />
  </div>
</template>

<script>
// @ is an alias to /src

import MainContent from './MainContent.vue'


export default {
  name: 'HomeView',
  components: { MainContent }
}
</script>
<style scoped></style>
