<template>
    <div @click="clickHandler" :style="{ color: color }">Hello {{ what }}</div>
</template>

<script>
export default {
    name: 'HelloWhat',
    props: {
        what: String
    },
    data() {
        return {
            color: 'black'
        }
    },
    methods: {
        clickHandler() {
            if (this.color === 'black') {
                this.color = 'red'
            } else {
                this.color = 'black'
            }
        }
    }
}

</script>

<style scoped></style>
