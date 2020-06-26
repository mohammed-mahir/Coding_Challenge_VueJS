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
      <v-btn color="error">
        Delete
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    computed: {
    ...mapGetters(["allTodos"])
  }
}
</script>

<style lang="css">
</style>
