<template>
    <div>
        <h4>评论</h4>
        <form @submit.prevent="addComment">
            <textarea v-model="newComment" rows="3" cols="30" placeholder="请输入评论内容"></textarea>
            <button type="submit">提交评论</button>
        </form>
        <div v-for="(comment, index) in comments" :key="index">
            <p>{{ comment }}</p>
            <button @click="deleteComment(index)">删除评论</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comment',
    data() {
        return {
            comments: [],
            newComment: '',
        }
    },
    methods: {
        addComment() {
            if (this.newComment) {
                this.comments.push(this.newComment);
                this.newComment = '';
            }
        },
        deleteComment(index) {
            this.comments.splice(index, 1);
        }
    }
}



</script>


<style scoped></style>