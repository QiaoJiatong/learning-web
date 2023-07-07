<template>
    <div>
        <h1>我的第一个网页</h1>
        <button @click="count++">Count is:{{ count }}</button>
    </div>
</template>

<script>

export default {
    name: "MyComponent",
    data() {
        return {
            count: 0,
            firstName: 'John',
            lastName: 'Doe',
            ruthor: {
                name: 'John Doe',
                books: [
                    'Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 4 - The Mystery'
                ]
            }
        }
    },
    computed: {
        fullName: {
            get() {
                return this.firstName + ' ' + this.lastName
            },
            set(newValue) {
                [this.firstName, this.lastName] = newValue.split(' ')
            },
            publishheBooksMessage() {
                return this.author.books.length > 0 ? 'Yes' : 'No'
            }
        } 
    }


}

</script>

<style scoped>
h1 {
    color: red;
}

button {
    font-weight: bold;
}
</style>