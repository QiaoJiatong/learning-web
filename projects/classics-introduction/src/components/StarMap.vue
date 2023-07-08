<template>
    <div class="character">
        <img :src="img" class="box1">
        <div class="character">
            <a :href="Href">{{ name }}</a>
        </div>
    </div>

</template>

<script>
export default {
    name:'StarMap',
    props:{
        img:String,
        Href:String,
        name:String
    }
}


</script>

<style scoped>
.character {
    padding: 5px;
}
.box1{
    width: 150px;
    height: 150px;
}

</style>