import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const todos = {
  strict: true,
  state: {
    todoList: [
      {
        id: 1,
        title: 'Title 1',
        completed: false
      },
      {
        id: 2,
        title: 'Title 2',
        completed: false
      }
    ]
  },
  mutations: {

  },
  actions: {
    
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
