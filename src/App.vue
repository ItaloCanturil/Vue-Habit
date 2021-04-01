<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      openedModal: false,
      habits: []
    }
  },

  // methods: {
  //   addHabit (items) {
  //     this.habits.unshift(items)
  //   },

  //   removeHabit(items) {
  //     this.habits.splice(items, 1)
  //   }
  }
</script>

<style>
@import 'assets/style.css'
</style>
