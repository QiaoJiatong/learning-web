<template>
  <div>
    <input v-model="search" />
    <select size="5" v-model="selectedOption">
      <option v-for="option in filteredOptions" :value="option">
        {{ option.province + "," + option.city }}
      </option>
    </select>
    <div>
      <label for="province">省份:</label>
      <input v-model="province" />
      <label for="provincialCapital">省会:</label>
      <input v-model="city" />
    </div>
    <button @click="create">Create</button>
    <button @click="update">Update</button>
    <button @click="del">Delete</button>
  </div>
</template>
<script>
const defaultOptions = [
  {
    province: "河南",
    city: "郑州",
  },
  {
    province: "江苏",
    city: "南京",
  },
  {
    province: "湖南",
    city: "长沙",
  },
];
export default {
  name: "CURD2",
  data() {
    return {
      options: [...defaultOptions],
      search: "",
      selectedOption: "",
      province: "",
      city: "",
      // filteredOptions: [...defaultOptions],
    };
  },
  computed: {
    filteredOptions() {
      const arr = [];
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].province.includes(this.search) ||
          this.options[i].city.includes(this.search)
        ) {
          arr.push(this.options[i]);
        }
      }
      return arr;
    },
  },
  watch: {
    selectedOption() {
      this.inputSelect();
    },
  },
  methods: {
    inputSelect() {
      this.province = this.selectedOption.province;
      this.city = this.selectedOption.city;
    },
    create() {
      const obj = {
        province: this.province,
        city: this.city,
      };
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].province === obj.province &&
          this.options[i].city === obj.city
        ) {
          return;
        }
      }
      this.options.push(obj);
    },
    del() {
      // Array find/findIndex
      for (let i = 0; i < this.options.length; i++) {
        if (this.selectedOption === this.options[i]) {
          this.options.splice(i, 1);
          this.province = "";
          this.city = "";
        }
      }
    },
    update() {
      for (let i = 0; i < this.options.length; i++) {
        if (this.selectedOption === this.options[i]) {
          // const obj = {
          //   province: this.province,
          //   city: this.city,
          // };
          // this.options.splice(i, 1, obj);
          this.options[i].province = this.province;
          this.options[i].city = this.city;
        }
      }
    },
  },
};
</script>
<style scoped>
* {
  font-size: inherit;
}

input {
  display: block;
  margin-bottom: 10px;
}

select {
  float: left;
  margin: 0 1em 1em 0;
  width: 14em;
  height: 100px;
}

.buttons {
  clear: both;
}

button + button {
  margin-left: 5px;
}
</style>
