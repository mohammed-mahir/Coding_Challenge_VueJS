<template lang="html">
  <div>
    <v-card 
      v-for='todo in todos'
      :key='todo.id'>
      <v-card-title primary-title>
        <div>
          <h3 :class="{ completed: todo.completed, headline: true, 'mb-0': true }">{{ todo.title }}</h3>
        </div>
      </v-card-title>
      <v-btn 
        @click="markAsCompleted(todo.id)"
        :disabled="todo.completed"
      >
        Complete
      </v-btn>
      <v-btn 
        color="error"
        @click="deleteTodo(todo.id)"
      >
        Delete
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import Todo from "../classes/Todo"

/**
 * @vue-computed {object} todos - List of all Todos
 * @vue-event {Function} markAsCompleted - Event triggered when user presses 'Complete' button to update Todo's status
 * @vue-event {Function} deleteTodo - Event triggered when user presses 'Delete' button to delete a Todo
 */
export default {
  computed: {
    todos() {
      return Todo.query()
        .orderBy("id", "desc")
        .get();
    }
  },
  methods: {
    markAsCompleted(id) {
      Todo.update({
        where: id,
        data: {
          completed: true
        }
      });
    },
    deleteTodo(id) {
      Todo.delete(id);
    }
  }
}
</script>

<style lang="css">
.completed {
  text-decoration: line-through;
}
</style>
