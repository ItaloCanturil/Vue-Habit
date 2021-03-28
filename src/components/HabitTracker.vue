<template>
  <section class="habit-tracker">
    <header>
      <button @click="logout()">Logout</button>
      <h1 class="title">{{ title }}</h1>
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

    <footer class="footer">
      <figure class="footer__fig">
        <img class="fig__img" src="../assets/Group7.png" alt="climber">
      </figure>
    </footer>
  </section>  
</template>

<script>
import axiosInstance from '../../services/api'
export default {
  data () {
    return {
      title: 'Habit Tracker',
      date: '',
      user: {}
    }
  },

  methods: {
    searchDate () {
      if(!this.date){
        alert('Put the date')
        return
      }
      this.$emit('add')
    },
    logout  () {
      axiosInstance.post('/logout')
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.habit-tracker {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: clamp(2rem, 10vw, 3.75rem);
  margin-bottom: 30px;
}

.date__data {
  border-radius: 8px;
  border: none;
  padding: 5px;
}

.modal {
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  width: 400px;
}

.modal__add {
  margin-right: 10px;
  cursor: pointer;
}

.fig__img{
  left: 0;
  bottom: 0;
  position: absolute;
  max-width: 100%;
  z-index: -999;
}
</style>