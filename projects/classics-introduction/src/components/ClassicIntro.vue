<template>
    <h2 @click="clickHandler">{{ name }}</h2>
    <div v-if="flag">
        <h3>简介</h3>
        <router-link v-if="router" :to="router">
            <img :src="img" class="box">
        </router-link>
        <img v-else :src="img" class="box">
        <p>{{ intro }}</p>
        <Comment />
    </div>
</template>
<script>
import Comment from './Comment.vue'

const componet = {
    name: "ClassicIntro",
    components: {
        Comment
    },
    props: {
        name: String,
        img: String,
        intro: String,
        router: String
    },
    data() {
        return {
            flag: false
        }
    },
    methods: {
        clickHandler() {
            if (this.flag) {
                this.flag = false
            } else {
                this.flag = true
            }
        }
    }
}
export default componet
</script>