<template>
    <div class="layout">
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
export default {
  data () {
    return {
      habits: [],
    }
  },
  components: {
    Card
  }

}
</script>

<style>

</style>