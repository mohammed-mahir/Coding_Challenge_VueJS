<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    solo
    v-model='title'
    @keyup.enter="enterClicked()"
  />
</template>

<script>
import { mapActions } from "vuex"
export default {
  data() {
    return {
      title: "",
      IDsCounter: 1
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    enterClicked() {
      if (this.title !== "") {
        this.addTodo({ id: ++this.IDsCounter, title: this.title });
        this.title = "";
      }
    }
  }
}
</script>

<style lang="css">
</style>
