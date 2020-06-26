<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    solo
    v-model='todo.title'
    @keyup.enter="enterClicked()"
  />
</template>

<script>
import Todo from "../classes/Todo"

/**
 * @vue-data {object} todo - Todo object for the insertion form
 * @vue-event {Function} enterClicked - Event triggered when user presses enter to add new Todo
 */
export default {
  data() {
    return {
      todo: {
        title: ""
      }
    }
  },
  methods: {
    enterClicked() {
      if (this.todo.title !== "") {
        Todo.insert({ data: this.todo })
        this.todo.title = '';
      }
    }
  }
}
</script>

<style lang="css">
</style>
