<template>
    <div class="layout">
      <router-view
        @add="addGoal()"
      />

      <Modal
        :opened-modal='openedModal'
        @close="closeGoal()"
        @add="addHabit"
      />

      <Card
        :item="items"
        v-for="items in habits"
        :key="items"
        @remove="removeHabit"
      />
    </div>
</template>

<script>
import Card from '../../components/Card'
import Modal from '../../components/Modal'
export default {
  data () {
    return {
      openedModal: false,
      habits: [],
    }
  },
  components: {
    Card,
    Modal
  },
  methods: {
    addGoal () {
      this.openedModal = true
    },
    closeGoal () {
      this.openedModal = false
    },
    addHabit (items) {
      this.habits.unshift(items)
    },
    removeHabit(items) {
      this.habits.splice(items, 1)
    }
  }

}
</script>

<style>

</style>