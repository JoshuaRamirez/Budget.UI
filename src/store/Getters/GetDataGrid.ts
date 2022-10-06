import { ApplicationState } from '@/Store/States/ApplicationState';

export const GetDataGrid = (state : ApplicationState) => (dataGridId : string) => {
  const dataGrid = state.DataGridsState.DataGrids.find(x => x?.Id === dataGridId);
  return dataGrid;
};
