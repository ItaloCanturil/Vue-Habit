<template>
  <div class="login">
    <h1 class="login__title">Login</h1>
    <fieldset class="login__field">
      <form 
       class="field__form"
       @submit.prevent="checkForm"
       id="loginForm"
      >
        <input type="email"
          v-model="email"
          class="form__email form__input"
          placeholder="Email"
          @change="validateEmail"
        >
        <p>This email is invalid</p>
        <input type="password" v-model="password" class="form__password form__input" placeholder="Password">
        <p>This email is invalid</p>
      </form>
      <router-link to="/">Esqueci minha senha</router-link>
      <button type="submit" value="submit" form="loginForm">Login</button>
      <router-link to="/register">Sign up now</router-link>
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
  data () {
    return {
      error: false,
      email: '',
      password: ''
    }
  },
  
  methods: {
    async login () {
      try {
        const response = await axiosInstance.post('/login', {
          email: this.email,
          password: this.password
        })
        const token = response.data.auth.token
        localStorage.setItem('token', token)
        this.$store.commit('setToken', token)
        this.$router.push('/') 
      } catch (error) {
        if (error.response) {
            console.log(error.response.data.error);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        console.log(error);
      }
    },

    validateEmail (email) { 
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return console.log(re.test(String(email.target._value).toLowerCase()));
    },

    checkForm () {
      if (!this.email && !this.password && !this.error) {
        this.error = true;
        return
      }

      this.login()
    },
  }
}
</script>

<style scoped>
.login {
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

.login__field {
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
  width: 80%;
}

.form__input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #131111;
  height: 3rem;
  padding: 5px;
  margin-bottom: 15px;
  outline: none;
  transition: .2s ease-out;
}

.form__input:focus {
  border-bottom: 1px solid #095209;
  box-shadow: 0 1px 0 0 #095209;
}
</style>>
