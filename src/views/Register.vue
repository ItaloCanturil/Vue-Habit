<template>
  <div class="register">
    <h1 class="register__title">Sign Up</h1>
    <fieldset class="register__field">
      <form class="field__form">
        <input type="text" class="form__name" placeholder="Name">
        <input type="email" class="form__email" placeholder="Email">
        <input type="password" class="form__password" placeholder="Password">
      </form>
      <a href="/">Click here for login</a>
      <button>Register</button>
    </fieldset>
  </div>
</template>

<script>

export default {
  name: 'Login',
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
</style>