<template>
  <div class="home">
    <titles names="红楼梦" />
    <titles names="西游记" />
    <titles names="三国演义" />
    <titles names="水浒传" />
  </div>
</template>

<script>
// @ is an alias to /src

import titles from './Home.vue'


export default {
  name: 'HomeView',
  components: { titles }
}
</script>
