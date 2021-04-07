<template>
  <section class="habit-tracker">
    <header class="header-tracker">
      <button @click="logout()"
              class="btn-logout"
      >
      Logout
      </button>
    </header>
      
    <h1 class="title">{{ title }}</h1>

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
        <img class="fig__img" src="../../assets/Group7.png" alt="climber">
      </figure>
    </footer>
  </section>  
</template>

<script>
import axiosInstance from '../../../services/api'
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
      console.log(this.date)
      this.$emit('add', {
        date: this.date
      })
    },
    logout  () {
      axiosInstance.post('/logout', {}, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.habit-tracker {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.header-tracker {
  align-items: center;
  background: #0e2c4d;
  display: flex;
  justify-content: end;
  height: 40px;
  position: fixed;
  top: 0;
  width: 100%;
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

.btn-logout {
  background: #fafafa;
  border-radius: 8px;
  border: 2px solid #fafafa;
  cursor: pointer;
  padding: 5px 10px 5px;
  margin-right: 15px;
}

.btn-logout:hover {
  border-top-color: #bbb;
  border-width: 4px 2px 0;
}
</style>