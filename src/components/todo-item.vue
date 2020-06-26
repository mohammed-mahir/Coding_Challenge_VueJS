<template lang="html">
  <div>
    <v-card 
      v-for='item in allTodos'
      :key='item.id'>
      <v-card-title primary-title>
        <div>
          <h3 :class="{ completed: item.completed, headline: true, 'mb-0': true }">{{ item.title }}</h3>
        </div>
      </v-card-title>
      <v-btn 
        @click="markAsCompleted(item.id)"
        :disabled="item.completed"
      >
        Complete
      </v-btn>
      <v-btn 
        color="error"
        @click="deleteTodo(item.id)"
      >
        Delete
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {
    ...mapActions(["deleteTodo", "markAsCompleted"])
  }
}
</script>

<style lang="css">
.completed {
  text-decoration: line-through;
}
</style>
