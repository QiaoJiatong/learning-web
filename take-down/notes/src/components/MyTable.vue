<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="th in ths">{{ th }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in newTableData">
          <th>{{ row[0] }}</th>
          <td
            v-for="(cell, colIndex) in row.slice(1, row.length)"
            @click="tdClick(rowIndex, colIndex + 1)"
          >
            <input
              v-if="cell.editing"
              v-model="cell.value"
              @vue:mounted="inputMounted"
              @blur="cell.editing = false"
            />
            <span v-else>{{ cell.value }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <select v-model="rowNumber" @change="setRowNumber">
      <option :value="5">{{ "每页5行" }}</option>
      <option value="10">{{ "每页10行" }}</option>
      <option value="15">{{ "每页15行" }}</option>
      <option value="20">{{ "每页20行" }}</option>
    </select>
    <button v-for="(btn, btnIndex) in btnData" @click="turnPage(btnIndex)">
      {{ btn }}
    </button>
  </div>
</template>
<script>
const tableData = [];
for (let i = 0; i < 100; i++) {
  const tr = [];
  tr.push(i);
  for (let j = 0; j < 5; j++) {
    tr.push({
      editing: false,
      value: "",
      ref: null,
    });
  }
  tableData.push(tr);
}
// const btnData = ["上一页", "下一页"];
// for (let k = 1; k <= tableData.length / 5; k++) {
//   btnData.splice(k, 0, k);
// }
export default {
  name: "MyTable",
  data() {
    return {
      ths: ["", "A", "B", "C", "D", "E"],
      tableData,
      btnData: ["上一页", "下一页"],
      newTableData: [],
      oldBtnIndex: 1,
      rowNumber: 5,
    };
  },
  created() {
    this.turnPage(1);
    this.setRowNumber();
  },
  methods: {
    tdClick(rowIndex, colIndex) {
      this.newTableData[rowIndex][colIndex].editing = true;
    },
    inputMounted(e) {
      const { el } = e;
      el.focus();
    },
    setRowNumber() {
      this.btnData = ["上一页", "下一页"];
      for (let k = 1; k <= this.tableData.length / this.rowNumber; k++) {
        this.btnData.splice(k, 0, k);
      }
      this.turnPage(1);
    },
    turnPage(btnIndex) {
      if (btnIndex === 0) {
        if (this.oldBtnIndex === 1) {
          return;
        }
        btnIndex = this.oldBtnIndex - 1;
      } else if (btnIndex === this.btnData.length - 1) {
        if (this.oldBtnIndex === this.btnData.length - 2) {
          return;
        }
        btnIndex = this.oldBtnIndex + 1;
      }
      this.newTableData = [];
      for (let i = 0; i < tableData.length; i++) {
        if (Math.floor(i / this.rowNumber) === btnIndex - 1) {
          this.newTableData.push(tableData[i]);
          this.oldBtnIndex = btnIndex;
        }
      }
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table,
th,
td {
  padding: 5px;
  border: 1px solid black;
}
body {
  margin: 0;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 80%;
}

th {
  background-color: #eee;
}

tr:first-of-type th {
  width: 100px;
}

tr:first-of-type th:first-of-type {
  width: 25px;
}

td {
  border: 1px solid #ccc;
  height: 1.5em;
  overflow: hidden;
}
input {
  width: 100%;
  height: 100%;
}
button {
  margin: 5px;
}
</style>
