<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col" v-for="column in dataSource.columns" :key="column.id">{{column.name}}</th>
    </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="row in dataSource.rows" :key="row.id">
        <td>{{ row.number }}</td>
        <td>{{ row.firstName }}</td>
        <td>{{ row.lastName }}</td>
        <td>{{ row.exchange }}</td>
        <td>{{ row.totalFunds }}</td>
        <td @click="onActiveBotCountClicked(row.userId)">{{ row.activeBotCount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ActionTypes } from '@/store/ActionTypes'
const store = useStore()
const dataSource = computed(() => store.state.DataGrid.dataSource)
const onActiveBotCountClicked = (userId) => {
  store.dispatch(ActionTypes.IncrementActiveBotCount, userId)
}
</script>
