<template>
    <p>{{ count }}</p>
    <button @click="count++">counter</button>
</template>
<script>
export default{
    name: "Counter",
    data(){
        return{
            count:0
        }
    }
}

</script>