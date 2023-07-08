<template>
    <div>
        <ClassicIntro v-for="item in data" :name="item.name" :img="item.img" :intro="item.intro" :router="item.router" />

    </div>
</template>

<script>
import data from './data'
import ClassicIntro from './ClassicIntro.vue'

export default {
    name: 'MainContent',
    components: {
        ClassicIntro: ClassicIntro
    },
    data() {
        return {
            data,
        }
    },
}
console.log(data);


</script>


<style>
.box {
    width: 150px;
}

p {
    font-size: 14px;
    word-wrap: break-word;
    color: #333;
    margin-bottom: 15px;
    text-indent: 2em;
    line-height: 24px;
    zoom: 1;
}
</style>