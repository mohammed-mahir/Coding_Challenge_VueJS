import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const todos = {
  strict: true,
  state: {
    todoList: [
      {
        id: 1,
        title: 'Title',
        completed: false
      }
    ]
  },
  mutations: {
    inserTodo: (state, todo) => state.todoList.unshift(todo)
  },
  actions: {
    addTodo: ({ commit }, todo) => {
      commit('inserTodo', { ...todo, completed: false })
    }
  },
  getters: {
    allTodos: (state) => state.todoList
  }
}

export default new Vuex.Store({
  modules: {
    todosList: todos
  }
})
