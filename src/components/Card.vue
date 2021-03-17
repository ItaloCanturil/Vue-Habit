<template>
  <div class="card">
    <p>{{ this.item.habit }}</p>
    <img src="../assets/download_done.png" alt="Confirm the habit">
    <img src="../assets/edit.png" alt="Edit the habit">
    <img @click="$emit('remove')" src="../assets/close_big.png" alt="Remove the habit">
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Default'
    }
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.card {
  background: #C4C4C4;
  border-radius: 10px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 432px;
  height: 88px;
  margin: 15px 0 15px;
}
</style>