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
    },
    mutations: {
        addTodo(state, todo_text) {
            const obj = { completed: false, item: todo_text };
            localStorage.setItem(todo_text, JSON.stringify(obj));
            state.todoItems.push(obj);
        },

    },
});
