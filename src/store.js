import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * Todos Vuex Module
 * @type {object}
 */
const todos = {
  strict: true,
  state: {

    /**
     * @member {Array<{id: number, title: string, completed: boolean}>} todoList List of Todos
     */
    todoList: [
      {
        id: 1,
        title: 'Title',
        completed: false
      }
    ]
  },
  mutations: {

    /**
     * @member {Function} inserTodo Vuex Mutation for inserting new Todo
     * @returns {void}
     */
    inserTodo: (state, todo) => state.todoList.unshift(todo),

    /**
     * @member {Function} removeTodo Vuex Mutation for deleting Todo
     * @returns {void}
     */
    removeTodo: (state, id) => state.todoList = state.todoList.filter(t => t.id !== id),

    /**
     * @member {Function} updateTodo Vuex Mutation for updating Todo
     * @returns {void}
     */
    updateTodo: (state, updateTodoObj) => state.todoList.find(t => t.id === updateTodoObj.id)[updateTodoObj.prop] = updateTodoObj.value
  },
  actions: {

    /**
     * @member {Function} addTodo Vuex Action for adding new Todo
     * @returns {void}
     */
    addTodo: ({ commit }, todo) => {
      commit('inserTodo', { ...todo, completed: false })
    },

    /**
     * @member {Function} deleteTodo Vuex Action for deleting a Todo
     * @returns {void}
     */
    deleteTodo: ({ commit }, id) => {
      commit('removeTodo', id)
    },

    /**
     * @member {Function} markAsCompleted Vuex Action for updating a Todo
     * @returns {void}
     */
    markAsCompleted: ({ commit }, id) => {
      commit('updateTodo', { id: id, prop: 'completed', value: true })
    }
  },
  getters: {

    /**
     * @member {Function} allTodos Vuex Getter for fetching Todos List
     * @returns {void}
     */
    allTodos: (state) => state.todoList
  }
}

export default new Vuex.Store({
  modules: {
    todosList: todos
  }
})
