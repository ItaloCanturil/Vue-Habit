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

      <draggable>
        <Card
          :item="items"
          v-for="items in habits"
          :key="items"
          @remove="removeHabit"
        />
      </draggable>
    </div>
</template>

<script>
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import draggable from 'vuedraggable';
export default {
  data () {
    return {
      openedModal: false,
      habits: [],
    }
  },
  components: {
    Card,
    Modal,
    draggable
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