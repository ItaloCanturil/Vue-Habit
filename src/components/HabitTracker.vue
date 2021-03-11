<template>
  <section class="habit-tracker">
    <header>
      <h1>{{ title }}</h1>
    </header>

    <div class="date">
      <label for="date__data">Date: </label>
      <input
        class="date__data"
        type="date"
        name="date__data"
        v-model="date"
      >
    </div>

    <section class="modal">
      <p class="modal__add" @click="searchDate()">Add Goal</p>
      <p class="modal__chart">See the Chart</p>
    </section>

  </section>  
</template>

<script>
export default {
  data () {
    return {
      title: 'Habit Tracker',
      date: '' 
    }
  },

  methods: {
    searchDate () {
      if(!this.date){
        alert('Put the date')
        return
      }
    }
  }
}
</script>

<style>
.modal {
  display: flex;
  justify-content: center;
}

.modal__add {
  margin-right: 10px;
  cursor: pointer;
}
</style>