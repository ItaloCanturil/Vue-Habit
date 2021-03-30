<template>
  <div class="register">
    <h1 class="register__title">Sign Up</h1>
    <fieldset class="register__field">
      <form class="field__form" @submit.prevent="checkForm()" id="formRegister">
        <input type="text" v-model="name" class="form__name form__input" placeholder="Name">
        <p v-if="error == true" class="form__error">Name is required</p>
        <input type="email" v-model="email" class="form__email form__input" placeholder="Email">
        <p v-if="error == true" class="form__error">Email is required</p>
        <input type="password" v-model="password" class="form__password form__input" placeholder="Password">
        <p v-if="error == true" class="form__error">Password is required</p>
      </form>
      <router-link to="/login" class="field__link">Click here for login</router-link>
      <button class="field__submit" type="submit" form="formRegister" value="submit">Register</button>
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
      error: false,
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

.form__error {
  color: #cf0e0e;
  margin: 0;
  font-size: 0.8em;
  text-align: center;
}

.field__link {
  margin: 10px;
}

.field__submit {
  background: linear-gradient(to bottom, #184e77 0%, #1e6091 100%);
  border: none;
  border-radius: 5px;
  color: #f2f2f2;
  cursor: pointer;
  padding: 10px 15px 10px;
  text-transform: uppercase;
}

.field__submit:hover {
  background: linear-gradient(to bottom, #168aad 0%, #1a759f 100%);
}
</style>