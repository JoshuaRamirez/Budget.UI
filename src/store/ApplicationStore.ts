import { createStore } from 'vuex';
import { DataGridCreated } from '@/Store/Actions/DataGridCreated';
import { DataGridSortButtonCreated } from '@/Store/Actions/DataGridSortButtonCreated';
import { InitializeDataGrid } from '@/Store/Mutations/InitializeDataGrid';
import { InitializeDataGridSortButton } from '@/Store/Mutations/InitializeDataGridSortButton';
import { DataGridSortButtonClicked } from '@/Store/Actions/DataGridSortButtonClicked';
import { ToggleDataGridSortButtonIndicator } from '@/Store/Mutations/ToggleDataGridSortButtonIndicator';
import { CreateDefaultDataGridsState } from '@/Store/States/DataGridsState';
import { GetDataGridSortButton } from '@/Store/Getters/GetDataGridSortButton';
import { GetDataGrid } from '@/Store/Getters/GetDataGrid';
import { SortDataGrid } from '@/Store/Mutations/SortDataGrid';

export class ApplicationState {
  public DataGridsState = CreateDefaultDataGridsState()
}

export class ApplicationGetters {
  public GetDataGrid = GetDataGrid
  public GetDataGridSortButton = GetDataGridSortButton
}

export class ApplicationMutations {
  public InitializeDataGrid = InitializeDataGrid
  public InitializeDataGridSortButton = InitializeDataGridSortButton
  public ToggleDataGridSortButtonIndicator = ToggleDataGridSortButtonIndicator
  public SortDataGrid = SortDataGrid
}

export class ApplicationActions {
  public DataGridCreated = DataGridCreated
  public DataGridSortButtonCreated = DataGridSortButtonCreated
  public DataGridSortButtonClicked = DataGridSortButtonClicked
}

export class ApplicationStore {
  public actions = new ApplicationState()
  public getters = new ApplicationGetters()
  public mutations = new ApplicationMutations()
  public state = new ApplicationState()
  public modules = {}
}

const applicationStore = {
  state: new ApplicationState(),
  getters: { ...new ApplicationGetters() },
  mutations: { ...new ApplicationMutations() },
  actions: { ...new ApplicationActions() },
  modules: {}
};
export default createStore<ApplicationState>(applicationStore);
