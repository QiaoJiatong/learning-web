<template>
    <div>
        <form @submit.prevent="AddTodoEvent">
            <textarea v-model="NewEvent" placeholder="请输入待办事件"></textarea>
            <button type="submit">添加事件</button>

        </form>
        <fieldset style="width: 300px;">
            <legend>待办事件</legend>
            <div v-for="(TodoEvent, index) in TodoEvents" :key="index">
                <input @click="clickHandle1(index)" type="checkbox" id="scaes" name="scales" checked>
                <label for="scales">{{ TodoEvent }}</label>
                <input type="datetime-local" id="start" name="trip-start" value="2023-7-9T00:00" min="2023-7-8T00:00"
                    max="2023-12-31T23:59">
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


export default {
    name: 'NotepadTool',
    data() {
        return {
            TodoEvents: [],
            NewEvent: '',
            CompletedEvnts: [],
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
</style>