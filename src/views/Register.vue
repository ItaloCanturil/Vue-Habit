<template>
  <div class="register">
    <h1 class="register__title">Sign Up</h1>
    <fieldset class="register__field">
      <form class="field__form">
        <input type="text" v-model="name" class="form__name" placeholder="Name">
        <input type="email" v-model="email" class="form__email" placeholder="Email">
        <input type="password" v-model="password" class="form__password" placeholder="Password">
      </form>
      <router-link to="/">Click here for login</router-link>
      <button @click="register()">Register</button>
    </fieldset>

    <footer class="register__footer">
      <figure class="footer__fig">
        <img class="fig__wave" src="../assets/wave.png" alt="Wave">
      </figure>
    </footer>
  </div>
</template>

<script>
import axiosInstance from '../../services/api'
export default {
  name: 'Register',

  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },

  methods: {
    async register () {
      try {
        await axiosInstance.post('/register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
          this.$router.push('/')
      } catch(error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.register {
  background: #0d243c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.register__field {
  background: #f2f2f2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 300px;
}

.fig__wave {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: -999;
}

.field__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>