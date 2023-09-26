<template>
    <div>
        <ul>
            <li v-for="(todo, idx) in todoItems" :key="idx">
                {{ todo }}
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
                this.todoItems.push(localStorage.key(i));
            }
        }
    }
}
</script>

<style></style>