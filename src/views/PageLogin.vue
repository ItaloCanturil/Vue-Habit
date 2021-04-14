<template>
  <div class="login">
    <h1 class="login__title">Login</h1>
    <div class="login__field">
      <form
       class="field__form"
       @submit.prevent="checkForm"
       id="loginForm"
      >
        <label for="email">
          Email:
        </label>
        <input type="email"
          v-model="authLogin.email"
          class="form__email form__input"
          name= "email"
          @blur="validateEmail"
        >
        <p
          class="form__error"
          v-if="hasError.email.req"
        >
          This email is invalid
        </p>
        <label for="password"
          class="form__password"
        >
          Password:
        </label>
        <input type="password"
          name="password"
          v-model="authLogin.password"
          class="form__input"
          @blur="validatePassword"
        >
        <p
          class="form__error"
          v-if="hasError.password.req"
        >
        This password is invalid
        </p>
      <router-link to="/"
        class="login__forget"
      >
        Esqueci minha senha
      </router-link>
      <button 
        type="submit"
        value="submit"
        form="loginForm"
        class="login__btn"
      >
        Login
      </button>
      <router-link to="/register"
        class="login__register"
      >
        Sign up now
      </router-link>
      </form>
    </div>

    <figure class="footer__fig">
      <img class="fig__wave" src="../assets/wave.png" alt="Wave">
    </figure>
  </div>  
</template>

<script>
import axiosInstance from '../../services/api'

export default {
  data () {
    return {
      error: false,
      hasError: {
        email: {
          req: false
        },
        password: {
          req: false
        }
      },
      authLogin: {
        email: '',
        password: '',
      }
    }
  },
  
  methods: {
    async login () {
      try {
        const response = await axiosInstance.post('/login', this.authLogin)
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

    validatePassword () {
      this.hasError.password.req = false
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      if(!re.test(this.authLogin.password)) {
        this.hasError.password.req = true;
        return
      }
    },

    validateEmail () { 
      this.hasError.email.req = false
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(this.authLogin.email.toLowerCase())) {
        this.hasError.email.req = true;
        return
      }
    },

    checkForm () {
      if (!this.authLogin.email && !this.authLogin.password && !this.error) {
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
  margin-bottom: 10px;
  outline: none;
  transition: .2s ease-out;
}

.form__input:focus {
  border-bottom: 1px solid #095209;
  box-shadow: 0 1px 0 0 #095209;
  padding: 10px;
}

.form__error {
  color: red;
  font-size: 0.8rem;
}

.form__password {
  margin-top: 5px;
}

.login__forget, .login__register {
  text-decoration: none;
  text-align: center;
  color: #184e77;
  margin-top: 5px;
}

.login__btn {
  background: linear-gradient(0deg, #1e6091 0%, #168aad 100%);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #f2f2f2;
  padding: 10px;
  margin: 10px 0px;
  width: 100%;
}

.login__btn:hover {
  background: linear-gradient(0deg, #1a759f 0%, #184e77 100%);
}
</style>>
