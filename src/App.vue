<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList 
      @toggleTodoEvent="toggleTodo"></TodoList>
    <TodoFooter @clearTodoEvent="clearTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import TodoFooter from '@/components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoItems: []
    }
  },//data
  methods: {
    toggleTodo(todoItem, index) {
      const { item, completed } = todoItem;
      this.todoItems[index].completed = !completed;
      localStorage.removeItem(item);
      localStorage.setItem(item, JSON.stringify(this.todoItems[index]));
    },
    clearTodo() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
}
</script>

<style src="@/assets/styles/styles.css"></style>
