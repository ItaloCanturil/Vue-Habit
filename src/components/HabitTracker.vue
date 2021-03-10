<template>
  <section class="habit-tracker">
    <header>
      <h1>{{ title }}</h1>
    </header>

    <div class="date">
      <label for="date__data">{{ date }}</label>
      <input
        class="date__data"
        type="date"
        name="date__data"
      >
    </div>
  </section>  
</template>

<script>
export default {
  data () {
    return {
      title: 'Habit Tracker',
      date: 'Date:' 
    }
  }
}
</script>

<style>

</style>