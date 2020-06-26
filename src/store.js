import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Todo from './classes/Todo'

Vue.use(Vuex)

/**
 * Todos Vuex-ORM Database Object
 * @type {object}
 */
const database = new VuexORM.Database()
database.register(Todo)

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

