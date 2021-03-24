<template>
  <div class="login">
    <h1 class="login__title">Login</h1>
    <fieldset class="login__field">
      <form 
       class="field__form"
       @submit="checkForm"
      >
        <input type="email" v-model="email" class="form__email form__input" placeholder="Email">
        <input type="password" v-model="password" class="form__password form__input" placeholder="Password">
      </form>
      <router-link to="/">Esqueci minha senha</router-link>
      <button>Register</button>
    </fieldset>

    <footer class="register__footer">
      <figure class="footer__fig">
        <img class="fig__wave" src="../assets/wave.png" alt="Wave">
      </figure>
    </footer>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      errors: [],
      email: '',
      password: ''
    }
  },
  
  methods: {
    checkForm (e) {
      this.erros = [];

      if (!this.email) {
        this.errors.push('Email is required');
      }
      if (!this.password) {
        this.erros.push('Password is required');
      }

      if (!this.erros.length) {
        return true
      }

      e.preventDefault();
    }
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
</style>>
