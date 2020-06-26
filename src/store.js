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
    inserTodo: (state, todo) => state.todoList.unshift(todo),
    removeTodo: (state, id) => state.todoList = state.todoList.filter(t => t.id !== id),
  },
  actions: {
    addTodo: ({ commit }, todo) => {
      commit('inserTodo', { ...todo, completed: false })
    },
    deleteTodo: ({ commit }, id) => {
      commit('removeTodo', id)
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
