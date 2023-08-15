export function child1(teacherName, sayMyName) {
  const name = "小明";
  console.log(teacherName + "老师好");
  if (sayMyName) {
    sayMyName(name);
  }
  // this.$emit('sayMyName', name)
}
