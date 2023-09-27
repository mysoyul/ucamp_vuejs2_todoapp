import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

// const storage = {
//     fetch() {
//         const arr = [];
//         if (localStorage.length > 0) {
//             for (let i = 0; i < localStorage.length; i++) {
//                 arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//             }
//         }
//         return arr;
//     },
// };

const todo_url = 'http://localhost:4500/api/todos';

export const store = new Vuex.Store({
    //state, actions, mutations, getters, modules
    state: {
        todoItems: []
    }, //state
    getters: {
        getTodoItems(state) {
            return state.todoItems;
        }
    }, //getters
    actions: {
        loadTodoItems(context) {
            axios
                .get(`${todo_url}`)  //Promise
                .then(res => res.data)
                .then(items => {
                    context.commit('setTodoItems', items)
                })
        }, //loadTodoItems
        addTodoItem(context, payload) {
            axios
                .post(`${todo_url}`, payload)
                .then(r => r.data)
                .then(items => {
                    context.commit('setTodoItems', items)
                })
        }, //addTodoItem
        removeTodoItem(context, payload) {
            axios
                .delete(`${todo_url}/${payload.id}`)
                .then(r => r.data)
                .then(items => {
                    context.commit('setTodoItems', items)
                })
        }, //removeTodoItem
        toggleTodoItem(context, payload) {
            axios
                .patch(`${todo_url}/${payload.id}`, payload)
                .then(r => r.data)
                .then(items => {
                    context.commit('setTodoItems', items)
                })
        },
        removeAllTodoItems(context) {
            axios
                .delete(`${todo_url}`)
                .then(r => r.data)
                .then(items => {
                    context.commit('setTodoItems', items)
                })
        },

    }, //actions
    mutations: {
        setTodoItems(state, items) {
            state.todoItems = items;
        },
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
