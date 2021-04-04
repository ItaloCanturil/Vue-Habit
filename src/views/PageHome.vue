<template>
  <div class="home">
    <header class="home__header">
      <router-link to="/home">
        <h1>Habit Tracker</h1>
      </router-link>
      <div class="home__sign">
        <router-link to="/login"
          class="sign__login"
        >
          Sign in
        </router-link>
        <router-link to="/register"
          class="sign__register"
        >
          Sign up
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home__header {
  align-items: center;
  background: #1E6091;
  display: flex;
  height: 60px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>