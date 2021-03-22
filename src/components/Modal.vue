<template>
  <section class="modal" v-if="openedModal == true">
    <div class="modal--goal">
      <section class="modal--goal__card">
        <header class="card__header">
          <h1 class="header__title">Add the goal</h1>
          <figure class="header__close">
            <img @click="$emit('close')" class="close__btn" src="../assets/close_big.png" alt="Close Modal">
          </figure>
        </header>
        <input class="card__field" type="text" v-model="habit"/>
        <button class="card__btn" @click="addHabit()">Add</button>
      </section>
    </div>
  </section>  
</template>

<script>
export default {
  data () {
    return {
      habit: ''
    }
  },

  props: {
    openedModal: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    addHabit () {
      if(!this.habit) return

      this.$emit('add', {
        habit: this.habit
      })

      this.habit = ''
    }
  },
}
</script>

<style scoped>
.modal__p {
  cursor: pointer;
  z-index: 1;
}

.modal--goal{
  align-items: center;
  background: rgba(0, 0, 0, 50%);
  display: flex;
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
}

.modal--goal__card {
  align-items: center;
  background: #E9E9E9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 45vh;
  margin-left: 10px;
  margin-right: 10px;
  width: 500px;
}

.card__header {
  display: flex;
  align-items: center;
}

.header__title { 
  margin-left: 6rem;
}

.header__close {
  cursor: pointer;
}

.card__field {
  border-radius: 8px;
  border: 0;
  padding: 5px;
}

.card__field:focus {
  box-shadow: inset 2px 2px 3px #181717;
}

.card__btn {
  background: #187524;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  padding: 5px 15px;
  margin-top: 10px;
}
</style>
