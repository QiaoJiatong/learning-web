<template>
    <div>
        <form @submit.prevent="AddTodoEvent">
            <textarea v-model="NewEvent" placeholder="请输入待办事件"></textarea>
            <button type="submit">添加事件</button>
        </form>
        <fieldset style="width: 400px;">
            <legend>待办事件</legend>
            <div v-for="(TodoEvent, index) in TodoEvents" :key="index">
                <input @click="clickHandle1(index)" type="checkbox" id="scaes" name="scales" checked>
                <label for="scales">{{ TodoEvent }}</label>
                <input @click="showPopup(index)" type="datetime-local" v-model="agreedDate" id="start" name="trip-start">
                <div v-if="show" class="popup">
                    <p>{{ message }}</p>
                    <p>{{ agreedDate }}</p>
                </div>
            </div>
        </fieldset>
        <fieldset>
            <legend>已完成事件</legend>
            <div v-for="(CompletedEvnt, index) in CompletedEvnts" :key="index">
                <input @click="clickHandle2(index)" type="checkbox" id="scaes" name="scales" checked>
                <label for="scales">{{ CompletedEvnt }}</label>
            </div>
        </fieldset>
    </div>
</template>
<script>

import { ref } from 'vue';


export default {
    name: 'NotepadTool',
    components: {
    },
    data() {
        return {
            TodoEvents: [],
            NewEvent: '',
            CompletedEvnts: [],
            show: false,
            message: "",
            agreedDate: "",
            age: 100000
        }
    },
    methods: {
        AddTodoEvent() {
            if (this.NewEvent) {
                this.TodoEvents.push(this.NewEvent);
                this.NewEvent = '';
            }
        },
        clickHandle1(index) {
            this.CompletedEvnts.push(this.TodoEvents[index]);
            this.TodoEvents.splice(index, 1);
        },
        clickHandle2(index) {
            this.TodoEvents.push(this.CompletedEvnts[index]);
            this.CompletedEvnts.splice(index, 1);
        },
        showPopup(index) {
            this.show = false;
            setTimeout(() => {
                this.age = Math.round(new Date(this.agreedDate).getTime() - Date.now())
                console.log(this.age);
            },3000)
            setTimeout(() => {
                this.message = this.TodoEvents[index]
                this.show = true;
            },this.age);
        }
    }

}

</script>

<style scoped>
fieldset {
    padding: 50px;
}

legend {
    text-align: center;
    background-color: rgb(135, 135, 232);
    padding: 2px;
}

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
}
</style>