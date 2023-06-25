<template>
  <p>生命周期函数</p>
  <p>{{ message }}</p>
  <button @click="message='数据'">点击</button>
</template>
  
<script>
export default {
  name: "Mycomponent",
  data(){
    return{
        message:""
    }
  },
    beforeCreate(){
        console.log("beforeCreate:组件创建之前");
    },
    created(){
        console.log("created:组件创建完成");
    },
    beforeMount(){
        console.log("beforeMouunt:渲染之前");
    },
    mounted(){
        console.log("mounted:组件渲染完成");
    },
    beforeUpdate(){
        console.log("beforeUpdate:组件更新之前");
    },
    updated(){
        console.log("updated:组件更新之后");
    },
    beforeUnmount(){
        console.log("beforeUNmount:组件卸载之前");
    },
    unmounted(){
        console.log("unmounted:组件卸载之后");
    }
}
</script>


<style scoped></style>