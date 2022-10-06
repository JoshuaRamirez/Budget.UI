import { createStore } from 'vuex';
import { ApplicationState } from '@/Store/States/ApplicationState';
import { DataGridCreated } from '@/Store/Actions/DataGridCreated';
import { DataGridSortButtonCreated } from '@/Store/Actions/DataGridSortButtonCreated';
import { InitializeDataGrid } from '@/Store/Mutations/InitializeDataGrid';
import { InitializeDataGridSortButton } from '@/Store/Mutations/InitializeDataGridSortButton';
import { DataGridSortButtonClicked } from '@/Store/Actions/DataGridSortButtonClicked';
import { ToggleDataGridSortButtonIndicator } from '@/Store/Mutations/ToggleDataGridSortButtonIndicator';
import { CreateDefaultDataGridsState } from '@/Store/States/DataGridsState';
import { GetDataGridSortButton } from '@/Store/Getters/GetDataGridSortButton';
import { GetDataGrid } from '@/Store/Getters/GetDataGrid';

export const ApplicationStoreFactory = createStore<ApplicationState>({
  state: {
    DataGridsState: CreateDefaultDataGridsState()
  },
  getters: {
    GetDataGrid,
    GetDataGridSortButton
  },
  mutations: {
    InitializeDataGrid,
    InitializeDataGridSortButton,
    ToggleDataGridSortButtonIndicator
  },
  actions: {
    DataGridCreated,
    DataGridSortButtonCreated,
    DataGridSortButtonClicked
  },
  modules: {}
});
