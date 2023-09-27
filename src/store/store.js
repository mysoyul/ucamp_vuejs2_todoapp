import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    },
};

export const store = new Vuex.Store({
    //state, actions, mutations, getters, modules
    state: {
        todoItems: storage.fetch()
    }, //state
    getters: {
        getTodoItems(state) {
            return state.todoItems;
        }
    }, //getters
    mutations: {
        addTodo(state, todo_text) {
            const obj = { completed: false, item: todo_text };
            localStorage.setItem(todo_text, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeTodo(state, payload) {
            const { todoItem: { item }, index } = payload;
            localStorage.removeItem(item);
            state.todoItems.splice(index, 1);
        },
        toggleTodo(state, payload) {
            const { todoItem: { item, completed }, index } = payload;

            state.todoItems[index].completed = !completed;
            localStorage.removeItem(item);
            localStorage.setItem(item, JSON.stringify(state.todoItems[index]));
        },
        clearTodo(state) {
            localStorage.clear();
            state.todoItems = [];
        },
    }, //mutations
});
