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

<styl
    HabitTrackere>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
