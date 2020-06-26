<template lang="html">
  <div>
    <v-card 
      v-for='item in allTodos'
      :key='item.id'>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ item.title }}</h3>
        </div>
      </v-card-title>
      <v-btn>
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
    ...mapActions(["deleteTodo"])
  }
}
</script>

<style lang="css">
</style>
