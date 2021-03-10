<template>
  <div id="app">
    <HabitTracker/>
  </div>
</template>

<script>
import HabitTracker from './components/HabitTracker'

export default {
  name: 'habit-tracker',

  components: {
    HabitTracker
  }
}
</script>

<style>
body {
  background: #0D243C;
  color: #9EA7B1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
