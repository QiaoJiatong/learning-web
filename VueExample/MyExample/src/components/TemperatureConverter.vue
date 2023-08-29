<template>
  <input type="number" :value="f" @change="setF" />
  <input type="number" :value="c" @change="setC" />
</template>

<script>
export default {
  name: "TemperatureConverter",
  data() {
    return {
      f: 32,
      c: 0,
    };
  },
  methods: {
    setC(e, c = e.target.value) {
      this.c = c;
      this.f = c * (9 / 5) + 32;
    },
    setF(e, f = e.target.value) {
      this.f = f; 
      this.c = (f - 32) * (5 / 9);
    },
  },
};

//  this.f = c * (9 / 5) + 32

// this.c = (f - 32) * (5 / 9)
</script>
