<template>
    <h3>我是单文件组件</h3>
</template>


<script>
export default {
    name: "MyComponent"
}
</script>

<!-- scoped:如果在style中添加此属性，就代表着当前样式只在当前组件中生效 -->
<style scoped>
h3{
    color: red;
}
</style>
