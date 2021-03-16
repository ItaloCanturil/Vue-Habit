<template>
  <div class="card">
    <p>{{ title }}</p>
    <img src="../assets/download_done.png" alt="Confirm the habit">
    <img src="../assets/edit.png" alt="Edit the habit">
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Default'
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