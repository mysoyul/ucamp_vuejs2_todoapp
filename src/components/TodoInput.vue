<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" ref="todoItem" @keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
        <MyModal v-if="showModal" @close="showModal = false">
            <h3 slot="header">
                경고!
                <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
            </h3>
            <div slot="body">
                아무것도 입력하지 않으셨습니다.
            </div>
        </MyModal>
    </div>
</template>

<script>
import MyModal from '@/components/common/MyModal.vue';

export default {
    //LifeCycle Hook method
    //$refs는 document.getElementById(id) 함수처럼 html dom에 직접 접근할 때 사용되는 객체
    //ref="todoItem"의 ref 속성은 기존의 id 속성과 동일한 속성이다
    mounted() {
        this.$refs.todoItem.focus();
    },
    data() {
        return {
            newTodoItem: "",
            showModal: false
        }
    }, //data
    components: {
        MyModal
    }, //components
    methods: {
        addTodo() {
            if (this.newTodoItem !== '') {
                this.$emit('addTodoEvent', this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        }, //addTodo
        clearInput() {
            this.newTodoItem = '';
        }, //clearTodo


    }, //methods
}
</script>

<style scoped>
i {
    cursor: pointer;
}
input:focus {
    outline: none !important;
    box-shadow: 0 0 0.4px #d6a8e9;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    border-style: none;
    font-size: 0.9rem;
    width: 75%;
    height: 50%;
}

.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn {
    color: white;
    vertical-align: middle;
}

.closeModalBtn {
    color: #42b983;
}
</style>