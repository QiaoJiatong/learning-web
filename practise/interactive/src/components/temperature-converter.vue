<script>
// this.f = c * (9 / 5) + 32
// this.c = (f - 32) * (5 / 9)
export default {
  name: "TemperatureConverter",
  data() {
    return {
      c: 0,
      f: 32,
    };
  },
  methods: {   
    setF(e, c) {
      console.log(c);
      const c1 = c !== undefined ? c : +e.target.value;
      this.c = c1;
      this.f = c1 * (9 / 5) + 32;
    },
    setC(e) {
      this.f = e.target.value;
      this.c = (this.f - 32) * (5 / 9);
    },
  },
};
</script>
<template>
  <div>
    <div>
      <span>摄氏度：</span>
      <input type="number" :value="c" @input="setF" />
    </div>
    <div>
      <span>华氏度： </span>
      <input type="number" :value="f" @input="setC" />
    </div>
  </div>
</template>
