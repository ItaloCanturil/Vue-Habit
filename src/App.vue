<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <HabitTracker
      @add="addGoal()"
    />

    <Modal
      :opened-modal='openedModal'
      @close="closeGoal()"
      @add="addHabit"
    />

    <Card
      :item="items"
      v-for="items in habits"
      :key="items"
      @remove="removeHabit"
    />
  </div>
</template>

<script>
import Card from './components/Card'
import HabitTracker from './components/HabitTracker'
import Modal from './components/Modal'

export default {
  data () {
    return {
      openedModal: false,
      habits: []
    }
  },

  components: {
    Card,
    HabitTracker,
    Modal
  },

  methods: {
    addGoal () {
      this.openedModal = true
    },

    closeGoal () {
      this.openedModal = false
    },

    addHabit (items) {
      this.habits.unshift(items)
    },

    removeHabit(items) {
      this.habits.splice(items, 1)
    }
  }
}
</script>

<style>
:root {
  --primary-color: #0D243C;
  --font-color: #9EA7B1;
}

body {
  background: var(--primary-color);
  font-family: 'Comic-sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: grayscale;
  color: var(--font-color);

}

#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 890px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto; 
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
