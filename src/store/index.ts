import { createStore } from 'vuex'
import { MutationTypes } from '@/store/MutationTypes'

export default createStore({
  state: {
    DataGrid: {
      dataSource: {
        columns: [
          { id: 'number', name: '#' },
          { id: 'firstName', name: 'First Name' },
          { id: 'lastName', name: 'Last Name' },
          { id: 'exchange', name: 'Exchanges' },
          { id: 'totalFunds', name: 'Total Funds' },
          { id: 'activeBotCount', name: 'Active Bots' }
        ],
        rows: [
          { id: Date.now(), userId: 100, number: 1, firstName: 'Kendrick', lastName: 'Monday', exchange: '1', totalFunds: 1234.56, activeBotCount: 0 },
          { id: Date.now(), userId: 101, number: 2, firstName: 'Penelope', lastName: 'Good', exchange: '3', totalFunds: 7890.12, activeBotCount: 0 },
          { id: Date.now(), userId: 102, number: 3, firstName: 'Brianna', lastName: 'Seymour', exchange: '4', totalFunds: 3456.78, activeBotCount: 0 },
          { id: Date.now(), userId: 103, number: 4, firstName: 'Grant', lastName: 'Brant', exchange: '2', totalFunds: 9012.34, activeBotCount: 0 },
          { id: Date.now(), userId: 104, number: 5, firstName: 'Jonah', lastName: 'Mercer', exchange: '1', totalFunds: 5678.90, activeBotCount: 0 }
        ]
      }
    }
  },
  getters: {
  },
  mutations: {
    IncrementActiveBotCount: (state, userId) => {
      state.DataGrid.dataSource.rows.forEach(row => {
        if (row.userId === userId) {
          row.activeBotCount += 1
        }
      })
    }
  },
  actions: {
    IncrementActiveBotCount: ({ commit }, userId: number) => {
      commit(MutationTypes.IncrementActiveBotCount, userId)
    }
  },
  modules: {
  }
})
