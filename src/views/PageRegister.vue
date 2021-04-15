<template>
  <div class="register">
    <h1 class="register__title">Sign Up</h1>
    <div class="register__field">
      <form class="field__form" @submit.prevent="checkForm()" id="formRegister">
        <label for="name">Name:</label>
        <input type="text"
          v-model="authRegister.name"
          class="form__name form__input"
          @blur="validateName"
        >
        <p v-if="hasError.name.req" class="form__error">Name is required</p>
        <label for="email">Email:</label>
        <input type="email"
          v-model="authRegister.email"
          class="form__email form__input"
          @blur="validateEmail"
        >
        <p v-if="hasError.email.req"
          class="form__error"
        >
          Email is required
        </p>
        <label for="password">Password</label>
        <input type="password"
          v-model="authRegister.password"
          class="form__password form__input"
          @blur="validatePassword"
          @focus="instructionPassword"
        >
        <p v-if="hasError.password.req"
          class="form__error"
        >
          Password is required
        </p>
        <p v-if="hasError.password.min"
          class="form__error"
        >
          Must have at least 8 characters
        </p>
        <router-link to="/login"
         class="form__link"
        >
          Click here for login
        </router-link>
        <button class="form__submit"
          type="submit"
          form="formRegister"
          value="submit"
        >
          Register
        </button>
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
  name: 'Register',

  data () {
    return {
      hasError: {
        name: {
          req: false
        },
        email: {
          req: false
        },
        password: {
          req: false,
          min: false
        }
      },
      authRegister: {
        name: '',
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async register () {
      try {
        await axiosInstance.post('/register', this.auhtRegister)
          this.$router.push('/profile')
      } catch(error) {
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

    validateName () {
      this.hasError.name.req = false
      
      if(!this.authRegister.name) {
        this.hasError.name.req = true
        return
      }
    },

    validatePassword () {
      this.hasError.password.req = false
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      if(!re.test(this.authRegister.password)) {
        this.hasError.password.req = true;
        return
      }
    },

    validateEmail () { 
      this.hasError.email.req = false
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(this.authRegister.email.toLowerCase())) {
        this.hasError.email.req = true;
        return
      }
    },

    instructionPassword () {
      this.hasError.password.min = false
      if (this.authRegister.password.lenght < 8) {
        console.log('chegou')
        this.hasError.password.min = true
        return
      }
    },

    checkForm () {
      if (!this.name && !this.email && !this.password && !this.error) {
        this.error = true;
        return
      }

      this.register()
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
  width: 80%;
}

.form__input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #131111;
  margin: 10px 0;
  outline: none;
  transition: .2s ease-out;
}

.form__input:focus {
  border-bottom: 1px solid #095209;
  box-shadow: 0 1px 0 0 #095209;
  padding: 10px;
}

.form__error {
  color: #cf0e0e;
  margin: 0;
  font-size: 0.8em;
  text-align: right;
}

.form__link {
  color: #184e77;
  margin: 10px;
  text-decoration: none;
  text-align: center;
}

.form__submit {
  background: linear-gradient(to bottom, #184e77 0%, #1e6091 100%);
  border: none;
  border-radius: 5px;
  color: #f2f2f2;
  cursor: pointer;
  padding: 10px 15px 10px;
  text-transform: uppercase;
}

.form__submit:hover {
  background: linear-gradient(to bottom, #168aad 0%, #1a759f 100%);
}
</style>