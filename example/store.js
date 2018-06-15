import Vue from 'vue-native-core'
import Vuex from 'vuex'
import remotedev from 'vuex-remotedev'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    editTodoPress(state, index) {
      state.todos[index].edited = true
    },
    editTodo(state, { index, task }) {
      state.todos[index].task = task
      state.todos[index].edited = false
    },
    cancelEdit(state, index) {
      state.todos[index].edited = false
    },
    toggleTaskStatus(state, index) {
      state.todos[index].isCompleted = !state.todos[index].isCompleted
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1)
    },
  },
  actions: {
    addTodo(context, todo) {
      context.commit('addTodo', todo)
    },
    editTodoPress(context, index) {
      context.commit('editTodoPress', index)
    },
    editTodo(context, payload) {
      context.commit('editTodo', payload)
    },
    cancelEdit(context, index) {
      context.commit('cancelEdit', index)
    },
    toggleTaskStatus(context, index) {
      context.commit('toggleTaskStatus', index)
    },
    deleteTodo(context, index) {
      context.commit('deleteTodo', index)
    },
  },
})

remotedev(store)

export default store
