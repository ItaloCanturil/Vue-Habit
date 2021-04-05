<template>
  <div class="home">
    <header class="home__header">
      <router-link to="/home" class="header__logo">
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

    <section class="home__apresentation">
      <p class="apresentation__text">
        Defina suas metas para atingir seus objetivos
      </p>

      <figure class="apresentation__map">
        <img class="map__img" src="../assets/undraw_adventure_map_hnin(1).svg" alt="Adventure Map">
      </figure>
    </section>
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
  height: 50px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.home__apresentation {
  display: flex;
  justify-content: space-evenly;
  width: 100vw; 
}

.apresentation__text{
  color: #f2f2f2;
  font-size: clamp(2rem, 5.5vw, 4rem);
  line-height: 90px;
  max-width: 500px;
  text-align: center;
}

.map__img {
  height: 425px;
  width: 100%;
  max-width: 548px;
}

.home__sign {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 180px;
}

.sign__login {
  text-decoration: none;
  color: #f1f3f3;
}

.sign__register {
  background: #FF8500;
  border-radius: 10px;
  padding: 5px 10px;
}

.header__logo, .sign__register {
  color: #f2f2f2;
  text-decoration: none;
}
</style>