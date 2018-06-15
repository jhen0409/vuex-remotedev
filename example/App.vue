<template>
  <view class="container">
    <add-todo :on-add='addTodo' />
    <scroll-view>
      <view class='todo-wrapper' v-for='(todo, index) in $store.state.todos' :key='index'>
        <todo-item
          :todo='todo'
          :selected-index='index'
          :edit-pressed='editTodoPress'
          :edit-todo='editTodo'
          :delete-todo='deleteTodo'
          :cancel-edit='cancelEdit'
          :toggle-task-status='toggleTaskStatus'
        />
      </view>
    </scroll-view>
  </view>
</template>

<script>
import { mapActions } from 'vuex'
import store from './store'
import AddTodo from './src/AddTodo'
import TodoItem from './src/TodoItem'

export default {
  store,
  data: () => ({}),
  components: {
    AddTodo,
    TodoItem
  },
  methods: {
    ...mapActions([
      'addTodo',
      'editTodoPress',
      'editTodo',
      'cancelEdit',
      'toggleTaskStatus',
      'deleteTodo',
    ]),
  }
}
</script>
 
<style>
.container {
  background-color: white;
  flex: 1;
  padding-top: 40;
}
.todo-wrapper {
  margin-horizontal: 15;
  background-color: beige;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-vertical: 2.5;
  padding: 10;
  border-radius: 5;
}
</style>
