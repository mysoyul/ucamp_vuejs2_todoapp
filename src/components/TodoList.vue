<template>
    <div>
        <ul>
            <li v-for="(todo, idx) in todoItems" :key="idx" class="shadow">
                <span :class="{ textCompleted: todo.completed }">{{ todo.item }}</span>
                <span class="removeBtn" @click="removeTodo(todo, idx)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoItems: []
        }
    },
    /* life cycle method */
    created() {
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                var itemJson = localStorage.getItem(localStorage.key(i));
                //parse() 함수 json -> object 변환
                this.todoItems.push(JSON.parse(itemJson));
            }
        }
    },
    methods: {
        removeTodo(todoItem, index) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        }
    },
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}

.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}

.checkBtnCompleted {
    color: #b3adad;
}

.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>