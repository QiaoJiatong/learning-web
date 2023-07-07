<template>
    <h1 @click="clickHandler">
        {{ content }}
    </h1>
</template>
  
<script>
export default {
    props: {
        content: String
    },
    methods: {
        clickHandler(e) {
            e.target.style.color = 'red'
        }
    }
}
</script>
  
<style scoped></style>
  